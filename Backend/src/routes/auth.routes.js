import express from 'express'
import { upload } from '../middlewares/multer.middleware.js'
import { refreshAccessTokenValidator, userLoginValidator, userRegistrationValidator, userVerificationValidator } from '../validators/auth.validators.js'
import validate from '../middlewares/validate.middleware.js'
import { getUserProfile, loginUser, logoutUser, refreshAccessToken, registerUser, resendVerificationMail, verifyUser } from '../controllers/auth.controllers.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const authRouter = express.Router()

authRouter.post('/register', 
  upload.single('image'), 
  userRegistrationValidator(),
  validate,
  registerUser
)

authRouter.post('/login',
  userLoginValidator(),
  validate,
  loginUser
)

authRouter.get('/verify/:token',
  userVerificationValidator(),
  validate,
  verifyUser
)

authRouter.post('/logout',
  authMiddleware,
  logoutUser
)

authRouter.get('/profile',
  authMiddleware,
  getUserProfile
)

authRouter.get('/resend-verify-email',
  authMiddleware,
  resendVerificationMail
)

authRouter.get('/refresh-tokens',
  refreshAccessTokenValidator(),
  validate,
  authMiddleware,
  refreshAccessToken
)

export default authRouter