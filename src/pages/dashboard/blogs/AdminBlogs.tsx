import { Link } from 'react-router-dom'
import React from 'react'
import Navbar from '../utility/navbar'

const AdminBlogs = () => {
    return (
        <div className='flex'>
            <Navbar />
            <div className='flex m-2 p-10 flex-col w-full'>
                <h1 className='text-3xl'>Blogs</h1>
                <Link to="create" className="text-white mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-[160px]">Write a new blog</Link>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Blog Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date Published
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    SilveNamer
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default AdminBlogs
