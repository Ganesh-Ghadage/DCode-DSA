import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import jwt from 'jsonwebtoken'
import { userDBClient } from '../libs/userDBClient.js'

export const authMiddleware = asyncHandler(async (req, res, next) => {
  
  const accessToken = req.cookies.accessToken

  if(!accessToken) {
    throw new ApiError(404, "User is not authenticated")
  }

  try {
    const { id } = jwt.decode(accessToken, process.env.ACCESS_TOKEN_SECRET)
  
    const user = await userDBClient.user.findUnique({
      where: {
        id
      },
      omit: {
        password: true,
        refreshToken: true
      }
    })
  
    if(!user) {
      throw new ApiError(404, "Invalid access token")
    }
  
    req.user = user
    
    return next()

  } catch (error) {
    throw new ApiError(400, error?.message || "Invalid Token")
  }

})