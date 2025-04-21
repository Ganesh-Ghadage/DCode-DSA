import { ApiResponce } from '../utils/ApiResponce.js'
import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { UserRole } from '../generated/prisma/index.js'
import { userDBClient } from '../libs/userDBClient.js'
import { upolodOnClodinary, deleteFromCloudinary } from '../utils/cloudinary.js'
import crypto from 'crypto'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
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
        emailVerificationToken: hashedToken,
        emailVerificationExpiry: tokenExpiry
      }
    })

    await sendVerifyMail(createdUser.name, createdUser.email, unHashedToken)

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

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await userDBClient.user.findUnique({
    where: {
      email
    }
  })

  if(!user) {
    throw new ApiError(404, "Invalid Credentials")
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if(!isPasswordValid) {
    throw new ApiError(404, "Invalid Credentials")
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user.id)

  if(!accessToken || !refreshToken) {
    throw new ApiError(502, "Tokens generation failed")
  }

  const loggedInUser = await userDBClient.user.findUnique({
    where: {
      id: user.id
    },
    omit: {
      password: true,
      refreshToken: true
    }
  })
  

  return res
    .status(200)
    .cookie("accessToken", accessToken, {...cookieOptions, maxAge: 1000*60*60*24*1})
    .cookie("refreshToken", refreshToken, {...cookieOptions, maxAge: 1000*60*60*24*10})
    .json(
      new ApiResponce(201, loggedInUser, "User logged In successfull")
    )

})

export const verifyUser = asyncHandler(async (req, res) => {
  const { token } = req.params

  const hashedToken = crypto.createHash('sha256').update(token).digest('hex')

  const user = await userDBClient.user.findFirst({
    where: {
      emailVerificationToken: hashedToken
    }
  })

  if(!user) {
    throw new ApiError(404, "Invalid verification token")
  }

  if(user.emailVerificationExpiry <= new Date()) {
    throw new ApiError(406, "Verification token expired")
  }

  await userDBClient.user.update({
    where: {
      id: user.id
    },
    data: {
      isEmailVerified: true,
      emailVerificationToken: null,
      emailVerificationExpiry: null
    }
  })

  return res
    .status(200)
    .json(new ApiResponce(
      200, 
      {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }, 
      "User verified succesfully"
      )
    )
})

export const logoutUser = asyncHandler(async (req, res) => {
  const user = req.user

  if(!user) {
    throw new ApiError(403, "Unauthorized request")
  }

  const loggedOutUser = await userDBClient.user.update({
    where: {
      id: user.id
    },
    data: {
      refreshToken: null
    },
    omit: {
      password: true,
      refreshToken: true
    }
  })

  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new ApiResponce(200, loggedOutUser, "User logged out successfully"))
})