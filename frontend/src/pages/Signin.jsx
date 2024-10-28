import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'

export default function Signin() {
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

          <form className='mt-4 flex flex-col'>

            <div>
              <Label value='Username / Email' />
              <TextInput
                type='text'
                placeholder='Username or Email'
                id='username'
              />
            </div>

            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
              />
            </div>


            <Button className='w-full my-4' gradientDuoTone='purpleToPink' type='submit' >
              Sign In
            </Button>

          </form>

          <div className='flex gap-3'>
            <span>New user?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>

        </div>

      </div>

    </div>
  )
}
