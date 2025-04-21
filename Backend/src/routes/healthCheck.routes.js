import express from 'express'
import { healthCheck } from '../controllers/healthCheck.controllers.js'

const healthCheckRouter = express.Router()

healthCheckRouter.get('/', healthCheck)

export default healthCheckRouter