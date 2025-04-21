import express from 'express'
import { upload } from '../middlewares/multer.middleware.js'
import { userRegistrationValidatior } from '../validators/auth.validators.js'
import validate from '../middlewares/validate.middleware.js'
import { registerUser } from '../controllers/auth.controllers.js'

const authRouter = express.Router()

authRouter.post('/register', 
  upload.single('image'), 
  userRegistrationValidatior(),
  validate,
  registerUser
)

export default authRouter