import 'dotenv/config'
import './database/connectionMongoDB.js'
import express from 'express'
import authRouter from './routes/api/APIRoutes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1', authRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(
    `🔥 Server running on port:${PORT} 🔥\n===> http://localhost:${PORT} `
  )
)
