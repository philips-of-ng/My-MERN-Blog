import express, { response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

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
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
