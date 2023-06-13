import React, { useContext } from 'react'
import { Link, useNavigate, useMatch } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { useLocalStorage } from '../../../utils/useLocalStorage'
const Navbar = () => {
    const navigate = useNavigate()
    const explore = useMatch('/explore');
    const textMatch = useMatch('/text');
    const projectMatch = useMatch('/projects');
    const blogsMatch =  useMatch('/blogs');
    const { user, setUser } = useContext(AuthContext)
    const { setItem } = useLocalStorage()
    const logout = () => {
        setUser(null)
        setItem("user", "")
        navigate("/")
    }
    return (
        <nav className="border-gray-200 bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
                </a>
                <div className="flex items-center md:order-2">
                    <p className='text-white cursor-pointer' onClick={() => logout()}> Logout </p>
                    <div className="z-50 hidden my-4 text-base list-none rounded-lg shadow bg-gray-700 divide-gray-600" id="user-dropdown">
                        Logout
                    </div>
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
                        <li>
                            <Link to="/explore" className={`block ${explore ? 'text-blue-500' : 'text-white'} py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent  md:p-0 `} aria-current="page">Explore</Link>
                        </li>
                        <li>
                            <Link to="/text" className={`block ${textMatch ? 'text-blue-500' : 'text-white'} py-2 pl-3 pr-4 rounded  md:p-0  md:hover:text-blue-500 hover:bg-gray-700  md:hover:bg-transparent border-gray-700`}>Messages</Link>
                        </li>
                        <li>
                            <Link to="/projects" className={`block ${projectMatch ? 'text-blue-500' : 'text-white'} py-2 pl-3 pr-4 rounded  md:p-0  md:hover:text-blue-500 hover:bg-gray-700  md:hover:bg-transparent border-gray-700`}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/blogs" className={`block ${blogsMatch ? 'text-blue-500' : 'text-white'} py-2 pl-3 pr-4 rounded md:p-0  md:hover:text-blue-500 hover:bg-gray-700  md:hover:bg-transparent border-gray-700`}>Blogs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
