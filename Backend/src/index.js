import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import errorHandler from './middlewares/errors.middleware.js'

import healthCheckRouter from './routes/healthCheck.routes.js'
import authRouter from './routes/auth.routes.js'
import problemRouter from './routes/problem.routes.js'
import executeCodeRouter from './routes/executeCode.routes.js'
import submissionRouter from './routes/submission.routes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api/v1/health-check', healthCheckRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/problems', problemRouter)
app.use('/api/v1/execute-code', executeCodeRouter)
app.use('/api/v1/submissions', submissionRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`App is listning to port: ${PORT}`)
})