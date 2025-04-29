import express from 'express'
import { upload } from '../middlewares/multer.middleware.js'
import { changePasswordViaTokenValidator, forgotPasswordValidator, refreshAccessTokenValidator, updatePasswordValidator, userLoginValidator, userRegistrationValidator, userVerificationValidator } from '../validators/auth.validators.js'
import validate from '../middlewares/validate.middleware.js'
import { changePasswordViaToken, forgotPassword, getUserProfile, loginUser, logoutUser, refreshAccessToken, registerUser, resendVerificationMail, updatePassword, verifyUser } from '../controllers/auth.controllers.js'
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

authRouter.post('/resend-verify-email',
  authMiddleware,
  resendVerificationMail
)

authRouter.post('/refresh-tokens',
  refreshAccessTokenValidator(),
  validate,
  authMiddleware,
  refreshAccessToken
)

authRouter.post('/forgot-password',
  forgotPasswordValidator(),
  validate,
  forgotPassword
)

authRouter.put('/change-password/:token',
  changePasswordViaTokenValidator(),
  validate,
  changePasswordViaToken
)

authRouter.put('/update-password',
  updatePasswordValidator(),
  validate,
  updatePassword
)

export default authRouter