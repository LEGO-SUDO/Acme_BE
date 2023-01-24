import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import customerRoutes from './routes/customers.js'
import authRoutes from './routes/auth.js'
import cors from 'cors'

dotenv.config()

const port = process.env.PORT || 8800

const app = express()
app.use(cors())

const connect = () => {
  mongoose
    .set('strictQuery', false)
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to DB')
    })
    .catch((err) => {
      throw err
    })
}

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/customer', customerRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'Something went wrong'
  return res.status(status).json({
    success: false,
    status: status,
    message,
  })
})
app.listen(port, () => {
  connect()
  console.log('Connected')
})
