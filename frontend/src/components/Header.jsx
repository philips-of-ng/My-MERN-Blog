import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
// import { HiSearch } from 'react-icons/hi'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

export default function Header() {

  const path = useLocation().pathname

  return (
    <Navbar>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-5 h-5 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>The Trilogy</span> Blog
      </Link>

      <form action="">
        <TextInput 
          type="text"
          placeholder="search"
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray">
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color="gray" pill>
          <FaMoon />
        </Button>

        <Link to='sign-in'>
          <Button gradientDuoTone='purpleToBlue'>
            Sign in
          </Button>
        </Link>

        <Navbar.Toggle>

        </Navbar.Toggle>

      </div>
      
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>
            Home
          </Link>
        </Navbar.Link>

        <Navbar.Link  active={path === '/about'} as={'div'}>
          <Link to='/'>
            About
          </Link>
        </Navbar.Link>

        <Navbar.Link  active={path === '/projects'} as={'div'}>
          <Link to='/'>
            Projects
          </Link>
        </Navbar.Link>

        
      </Navbar.Collapse>
    </Navbar>
  )
}
