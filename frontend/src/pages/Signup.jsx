import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Label, TextInput } from 'flowbite-react'

export default function Signup() {

  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields...')
    }

    try {
      const response = await fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      console.log(response);
      const data = await response.json()
      console.log(data);
    } catch (error) {
      console.log('Error signing up', error);
    }

  }

  return (
    <div className='min-h-screen mt-10'>

      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row align-middle gap-5'>

        {/* LEFT SIDE */}
        <div className='flex-1 flex flex-col justify-center'>

          <div>
            <Link to='/' className='font-bold dark:text-white text-4xl'>
              <span className='px-5 h-5 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>The Trilogy</span> Blog
            </Link>

            <p className='text-sm mt-5'>Welcome to the Trilogy Blog: a smooth blend of Tech, Arts and Law contents await you.</p>
          </div>


        </div>

        {/* RIGHT SIDE */}
        <div className='flex-1'>

          <form className='mt-4 flex flex-col' onSubmit={handleSubmit}>

            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>


            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='me@example.com'
                id='email'
                onChange={handleChange}
              />
            </div>


            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>


            <Button className='w-full my-4' gradientDuoTone='purpleToPink' type='submit' >
              Sign Up
            </Button>

          </form>

          <div className='flex gap-3'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>

          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }

        </div>

      </div>

    </div>
  )
}
