import express, { response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cors from 'cors'

dotenv.config()
const db_password = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://philipsedun:${db_password}@mern-blog.ej4hh.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog`)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((error => console.log(error)))

  
const app = express()

const PORT = 3000
const HOST = '0.0.0.0'

app.listen(PORT, HOST, () => {
  console.log(`Your server is running on Port ${PORT}, Host ${HOST}.`);
})

app.use(express.json())

app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)


app.use((error, request, response, next) => {
  const statusCode = error.statusCode || 500
  const message = error.message || 'Internal Server Error'
  response.status(statusCode).json({ 
    success: false,
    statusCode,
    message
   })
})