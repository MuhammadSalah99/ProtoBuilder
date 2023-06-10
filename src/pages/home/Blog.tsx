import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './utility/Footer'
import Navbar from './utility/Navbar'
const Blog = () => {

    const [blog, setBlog] = useState({})
    const { blogId } = useParams()
    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://nodeasaltask-production.up.railway.app/api/blogs/${blogId} `)
                .then((res) => {
                    setBlog(res.data)
                    console.log(blog)
                })
                .catch((err) => { console.log(err) })
        }, 500)

    }, [])

    return (
        <div className=' w-screen  bg-gray-50 dark:bg-gray-900'>
            <Navbar />
            <div className='w-[80%] m-auto p-10 h-full'>
                <h1 className='text-3xl text-white'>{blog.title}</h1>
                <span className='mb-3 font-normal text-gray-700 dark:text-gray-400'>By:{blog.user ? <span> {blog.user.firstName} {blog.user.lastName}</span> : ''}  </span>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.expert}</p>
                <img className="object-cover mt-3 w-full" src={blog.thumbNail} alt="" />
                <div className='text-white mt-10 [&>p]:mb-5 text-lg' dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
            <Footer />
        </div>
    )
}

export default Blog
