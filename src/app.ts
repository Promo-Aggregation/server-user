import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import errorHandler from './middleware/errorHandler'
import router from './routes'

import './config/mongoose'

// * Enable Request middleware to accept custom key:value
declare global {
  namespace Express {
    interface Request {
      device_token: string | string[]
      subscription: string[]
    }
  }
}

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)
app.use(errorHandler)

export default app
