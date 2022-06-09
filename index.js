import 'dotenv/config'
import './database/connectionMongoDB.js'
import express from 'express'
import authRouter from './routes/api/APIRoutes.js'

const app = express()

app.use('/api/v1', authRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(
    `🔥 Server running on port:${PORT} 🔥\n===> http://localhost:${PORT} `
  )
)
