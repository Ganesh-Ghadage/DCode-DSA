import express from 'express'
import { upload } from '../middlewares/multer.middleware.js'
import { userLoginValidator, userRegistrationValidator } from '../validators/auth.validators.js'
import validate from '../middlewares/validate.middleware.js'
import { loginUser, registerUser } from '../controllers/auth.controllers.js'

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

export default authRouter