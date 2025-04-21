import { db } from '../libs/db.js'
import { ApiResponce } from '../utils/ApiResponce.js'
import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { UserRole } from '../generated/prisma/index.js'
import { userDBClient } from '../libs/userDBClient.js'
import { upolodOnClodinary, deleteFromCloudinary } from '../utils/cloudinary.js'
import crypto from 'crypto'
import jwt from 'jsonwebtoken';
import { sendVerifyMail } from '../utils/mail.js'
import { cookieOptions } from '../utils/constants.js'

const generateAccessAndRefreshToken = async (userId) => {
  if (!userId) {
    return null
  }

  const user = await userDBClient.user.findUnique({
    where: {
      id: userId
    }
  });

  if(!user) {
    throw new ApiError(406, "User ID does not exits")
  }

  const accessToken = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    },
    process.env.ACCESS_TOKEN_SECRET,
    { 
       expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )

  const refreshToken = jwt.sign(
    {
      id: user.id
    },
    process.env.REFRESH_TOKEN_SECRET,
    { 
       expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )

  await userDBClient.user.update({
    where: {
      id: user.id
    },
    data: {
      refreshToken,
    }
  })

  return { accessToken, refreshToken }
}

const generateVerificationToken = () => {
  const unHashedToken = crypto.randomBytes(16).toString('hex')

  const hashedToken = crypto.createHash('sha256').update(unHashedToken).digest('hex')

  const tokenExpiry = new Date(Date.now() + (20*60*1000)) // 20 min

  return { unHashedToken, hashedToken, tokenExpiry }
}

export const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password } = req.body

  const imageLocalPath = req.file?.path

  const exisitingUser = await userDBClient.user.findUnique({
    where: {
      email
    }
  })

  if(exisitingUser) {
    throw new ApiError(400, "User already exits")
  }

  let image;
  if(imageLocalPath) {
    try {
      image = await upolodOnClodinary(imageLocalPath)
    } catch (error) {
      throw new ApiError(500, "Image upload on clodinary failed", error)
    }
  }

  let createdUser
  try {
    createdUser = await userDBClient.user.create({
      data: {
        name,
        email,
        password,
        role: UserRole.USER,
        image: image.url || null
      }
    })

    if(!createdUser) {
      throw new ApiError(502, "User not created")
    }

    const { unHashedToken, hashedToken, tokenExpiry } = generateVerificationToken()

    await userDBClient.user.update({
      where: {
        id: createdUser.id
      },
      data: {
        emailVerificationToken: unHashedToken,
        emailVerificationExpiry: tokenExpiry
      }
    })

    await sendVerifyMail(createdUser.name, createdUser.email, hashedToken)

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(createdUser.id)

    if(!accessToken || !refreshToken) {
      throw new ApiError(502, "Tokens generation failed")
    }

    const signedInUser = await userDBClient.user.findUnique({
      where: {
        id: createdUser.id
      },
      omit: {
        password: true,
        refreshToken: true
      }
    })
    

    return res
      .status(201)
      .cookie("accessToken", accessToken, {...cookieOptions, maxAge: 1000*60*60*24*1})
      .cookie("refreshToken", refreshToken, {...cookieOptions, maxAge: 1000*60*60*24*10})
      .json(
        new ApiResponce(201, signedInUser, "User Registered successfully, check email for verification")
      )
  
  } catch (error) {
    console.log(error)

    if(image){
      await deleteFromCloudinary(image.url)
    }

    if(imageLocalPath && !image){
      fs.unlinkSync(imageLocalPath)
    }

    if(createdUser) {
      await userDBClient.user.delete({
        where: {
          id: createdUser.id
        }
      })
    }

    throw new ApiError(500, error?.message || "User Registration Failed", error)
  }

})