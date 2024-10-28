import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utilities/error.js';

export const signup = async (request, response, next) => {
  const { username, email, password } = request.body;

  if (!username || !email || !password || username == '' || email == '' || password == '') {
    next(errorHandler(400, 'All fields are required.'))
  }

  const hashedPassword = bcryptjs.hashSync(password, 15)

  const newUser = new User({
    username,
    email,
    password: hashedPassword
  })

  try {
    await newUser.save()
    response.status(201).json({ message: 'User created successfully' })  
  } catch (error) {
    next(error)
  }
}