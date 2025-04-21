import express from 'express'
import dotenv from 'dotenv'
import errorHandler from './middlewares/errors.middleware.js'
import healthCheckRouter from './routes/healthCheck.routes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/health-check', healthCheckRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`App is listning to port: ${PORT}`)
})