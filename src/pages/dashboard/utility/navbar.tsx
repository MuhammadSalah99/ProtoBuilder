import React, { useContext } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { AuthContext } from "../../../context/AuthContext"
import { useLocalStorage } from '../../../utils/useLocalStorage'

const navbar = () => {

    const { user, setUser } = useContext(AuthContext)
    const { setItem } = useLocalStorage()
    const logout = () => {
        setUser(null)
        setItem("user", "")
    }
    const home = useMatch(`/${user.id}/dashboard`)
    const blogs = useMatch(`/${user.id}/dashboard/blogs`)
    const projects = useMatch(`/${user.id}/dashboard/projects` )
    const settings = useMatch(`/${user.id}/dashboard/user/edit`)
    const inbox = useMatch(`/${user.id}/dashboard/inbox`)


    return (

        <div className="flex flex-col  p-3 bg-gray-800 shadow w-60">
            <div className="space-y-3">
                <div className="flex items-center">
                    <h2 className="text-xl font-bold text-white">Dashboard</h2>
                </div>

                <Link
                    to={`/${user.id}/dashboard/user/edit`}>
                    <h1 className='text-white text-lg'>{user ? user.name : ""}</h1>
                </Link>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center py-4">
                        <button
                            type="submit"
                            className="p-2 focus:outline-none focus:ring"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </span>
                    <input
                        type="search"
                        name="Search"
                        placeholder="Search..."
                        className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                    />
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm h-[60vh] flex flex-col justify-around">
                        <li className="rounded-sm">
                            <Link
                                to={`/${user.id}/dashboard`}
                                className={`flex ${home ? 'text-blue-500' : 'text-gray-100'} items-center p-2 space-x-3 hover:text-blue-500 rounded-md`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                <span className="">Home</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                to={`/${user.id}/dashboard/inbox`}
                                className={`flex ${inbox ? 'text-blue-500' : 'text-gray-100'} items-center p-2 space-x-3 hover:text-blue-500 rounded-md`}

                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                    />
                                </svg>
                                <span >Inbox</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                to={`/${user.id}/dashboard/blogs`}
                                className={`flex ${blogs ? 'text-blue-500' : 'text-gray-100'} items-center p-2 space-x-3 hover:text-blue-500 rounded-md`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" stroke-linecap="round" stroke-linejoin="round"></path>

                                </svg>
                                <span>Blogs</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                className={`flex ${settings ? 'text-blue-500' : 'text-gray-100'} items-center p-2 space-x-3 hover:text-blue-500 rounded-md`}
                                to={`/${user.id}/dashboard/user/edit`}>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="">Settings</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link

                                to={`/${user.id}/dashboard/projects`}

                                className={`flex ${projects ? 'text-blue-500' : 'text-gray-100'} items-center p-2 space-x-3 hover:text-blue-500 rounded-md`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" stroke-linecap="round" stroke-linejoin="round"></path>

                                </svg>
                                <span className="">Projects</span>
                            </Link>
                        </li>
                        <li className="rounded-sm cursor-pointer">
                            <a
                                onClick={() => logout()}
                                className="flex items-center text-gray-100 p-2 space-x-3 rounded-md hover:text-blue-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                    />
                                </svg>
                                <span className="">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default navbar
