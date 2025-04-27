import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { userDBClient } from '../libs/userDBClient.js'

export const checkAdmin = asyncHandler(async (req, res, next) => {
  try {
    const user = await userDBClient.user.findUnique({
      where: {
        id: req?.user.id
      }
    })

    if(!user) {
      throw new ApiError(404, "User not found")
    }

    if(user.role !== "ADMIN") {
      throw new ApiError(403, "Access denied - Admin Only!")
    }

    return next()

  } catch (error) {
    throw new ApiError(502, error?.message || "Error checking admin role")
  }
})