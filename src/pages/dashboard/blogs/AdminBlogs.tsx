import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../utility/navbar'
import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext'
const AdminBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const { user } =useContext(AuthContext)
    useEffect(() => {
        axios.get(`https://nodeasaltask-production.up.railway.app/api/blogs/by/${user.id}`)
            .then((res) => {
                setTimeout(() => {
                    console.log(res)
                    setBlogs(res.data)
                    console.log(blogs)
                }, 500)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const deleteBlog = (id: number) => {
        axios.delete(`https://nodeasaltask-production.up.railway.app/api/blogs/${id}`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        let newBlogs = blogs.filter((blog) => {
            if(blog.id != id) {
                return true
            }
        })
        setBlogs(newBlogs)

    }
    return (
        <div className='flex h-screen'>
            <Navbar />
            <div className='flex m-2 p-10 flex-col w-full'>
                <h1 className='text-3xl'>Blogs</h1>
                <Link to="create" className="text-white mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-[160px]">Write a new blog</Link>
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
                            {blogs.map((blog) => (
                                <tr className="bg-white border-b" key={blog.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {blog.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {blog.createdAt}
                                    </td>
                                    <td className="px-1 py-4 flex justify-around  items-start w-24">
                                        <Link to={`${blog.id}/edit`} className='font-medium text-blue-600 hover:underline cursor-pointer'>Edit</Link>
                                        <p onClick={() => deleteBlog(blog.id)} className="font-medium text-blue-600  hover:underline cursor-pointer">Delete</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default AdminBlogs
