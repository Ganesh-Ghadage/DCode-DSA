import express from 'express'
import { upload } from '../middlewares/multer.middleware.js'
import { userLoginValidator, userRegistrationValidator, userVerificationValidator } from '../validators/auth.validators.js'
import validate from '../middlewares/validate.middleware.js'
import { loginUser, registerUser, verifyUser } from '../controllers/auth.controllers.js'

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

export default authRouter