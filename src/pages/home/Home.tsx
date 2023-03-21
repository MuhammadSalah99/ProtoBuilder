import React from 'react'
import { Menu } from '@headlessui/react'
import { Link } from "react-router-dom";

const Home = () => {

  let pages = [
    {name: "HOME", link: '/'},
    {name: "ABOUT US", link: '/'},
    {name: "PRICING", link: '/'},
    {name: "CONTACT US", link: '/'},
    {name: "PLANS", link: '/'},
  ]

  return (
   <div className='bg-indigo-700 w-full h-screen flex items-center'>
      <div className='shadow-md w-full fixed top-0 left-0'>
          <div className='md:flex items-center justify-between bg-white py-5 md:px-10 px-7 '>
            <ul className='md:flex md:items-center'>
              {pages.map((page) => (
                <li  key={page.name} className='md:ml-8 text-xl'>
                  <a href={page.link} className="text-gray-800 hover:text-sky-600 duration-500 text-sm">{page.name}</a>
                </li>
              ))}
            </ul>
            <div className='md:flex items-center justify-between w-1/6'>
              <Link to="/login" className='text-l text-gray-800 hover:text-sky-600 duration-500  underline cursor-pointer'>Log in</Link>
              <Link to="/register" className="bg-blue-700	hover:bg-sky-600	duration-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Getting Started
              </Link >
            </div>
          </div>
      </div>
      <div className='w-full h-2/4 flex items-center justify-around flex-col'>
          <h1 className='text-7xl text-white w-3/4 text-center font-bold font-mono'>Create a Your Protofolio Website Without Limits</h1>
          <p className='w-1/2 text-center text-white text-xl mt-30'>Build and scale with confidence. From powerful site infrastructure to advanced business solutions—we’ve got you covered.</p>
          <Link to="/register" className="bg-white flex items-center justify-center	hover:bg-sky-600	duration-500 text-black h-16 w-1/6 hover:text-white  rounded-full">
                Getting Started
              </Link >
      </div>
   </div>
  )
}

export default Home