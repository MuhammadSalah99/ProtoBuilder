import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Filters from './utility/Filters'
import Footer from './utility/Footer'
import Navbar from './utility/Navbar'

const BlogsOfUser = () => {

    const [blogs, setBlogs] = useState([])
    const [authe, setAuthe] = useState({})
    const { user } = useContext(AuthContext)
    const { userId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`https://nodeasaltask-production.up.railway.app/api/blogs/by/${userId}`);
                setBlogs(response.data);
                console.log(blogs)
            } catch (error) {
                console.error(error);
            }
        };

        setTimeout(() => {
            fetchBlogs();
            axios.get(`https://nodeasaltask-production.up.railway.app/api/users/${userId}`)
                .then((res) => {
                    setAuthe(res.data)
                    console.log(authe)
                })
                .catch((err) => { console.log(err) })

        }, 500)
    }, []);
    return (

        <div className='w-screen bg-gray-50 dark:bg-gray-900'>
            <Navbar />
            <div className='flex w-full p-12 flex-col  h-full'>
                <h1 className='text-white font-bold mb-3 text-2xl'>{authe.firstName} {authe.lastName} Blogs:</h1>

                {blogs.map((blog) => (
                    <Link to={`/blogs/${blog.id}`} className="flex flex-col mb-3 w-2/3 h-[200px] items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row relative hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-full  md:w-48 md:rounded-none md:rounded-l-lg" src={blog.thumbNail} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title} </h5>
                            <Link to={`/users/${authe.id}`} className='mb-3 font-normal text-gray-700 dark:text-gray-400'>By:<span> {authe.firstName} {authe.lastName}</span>   </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.expert}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>

    )
}

export default BlogsOfUser
