import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Footer from './utility/Footer'
import Navbar from './utility/Navbar'
const User = () => {
    const { userId } = useParams()
    const { user } = useContext(AuthContext)
    const [eng, setEng] = useState({})
    const [userBlogs, setUserBlogs] = useState([])
    const [userProjects, setUserProjects] = useState([])
    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://nodeasaltask-production.up.railway.app/api/users/${userId}`)
                .then((res) => {
                    setEng(res.data)
                    console.log(eng)
                })
                .catch((err) => { console.log(err) })
            axios.get(`https://nodeasaltask-production.up.railway.app/api/blogs/by/${userId}`)
                .then((res) => {
                    console.log(res.data)

                    setUserBlogs(res.data)
                    console.log(userBlogs)

                })
                .catch((err) => { console.log(err) })
            axios.get(`https://nodeasaltask-production.up.railway.app/api/projects/by/${userId}`)
                .then((res) => {
                    console.log(res.data)
                    console.log('test')
                    setUserProjects(res.data)
                    console.log(userBlogs)

                })
                .catch((err) => { console.log(err) })

        }, 500);
    }, [])
    return (
        <div className='w-full  bg-gray-900 '>
            <Navbar />
            <div className='pt-10 w-full pl-16'>
                <div className='flex w-[200px] items-center text-gray-300'>
                    <Link to='/explore' className='flex w-20 mr-4 justify-between items-center'>
                        <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" fill-rule="evenodd"></path>
                        </svg>
                        Explore
                    </Link>
                    <div className='flex w-20  justify-around items-center'>
                        <svg aria-hidden="true" className="w-8 h-8 mr-2 -ml-1 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" fill-rule="evenodd"></path>
                        </svg>
                        Profile
                    </div>
                </div>

                <h1 className='text-white font-bold mt-3 text-3xl'>{user.firstName} {user.lastName} Profile</h1>
            </div>
            <div className='w-83 m-auto flex  h-fit pl-16 mt-8'>

                <div className="w-1/4 h-[350px] pl-6   rounded-lg shadow border  bg-gray-800 border-gray-700 flex-col flex justify-between pb-10">
                    <div className='w-full flex mt-8 h-16  items-center  pt-8'>
                        <img className="object-cover w-[80px] h-[80px] rounded-lg " src={user.profilePic} alt="" />
                    </div>
                    <h1 className='text-white font-bold'>{user.firstName} {user.lastName}</h1>
                    <div className=' w-full flex flex-col'>
                        <p className='flex w-[60%] text-sm   items-center text-gray-500'>
                            <svg className='text-white w-4 h-4 mr-1' aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" fill-rule="evenodd"></path>
                                <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"></path>
                            </svg>
                            {eng.major}
                        </p>
                        <p className='flex w-[60%] text-sm  mt-3 items-center text-gray-500'>
                            <svg className='text-white w-4 h-4 mr-1' aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" fill-rule="evenodd"></path>
                            </svg>
                            {eng.city} - {eng.officeAddress}
                        </p>

                    </div>
                    <div className='w-full relative '>
                        <p className='text-gray-600'>Phone</p>
                        <p className='text-white'>{eng.phone}</p>
                        <Link to={`/${user.id}/message/${eng.id}`} type="button" className="text-white absolute right-3 bottom-1 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 bg-transparent hover:bg-blue-700 focus:ring-blue-800">
                            <svg aria-hidden="true" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" fill-rule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Icon description</span>
                        </Link>

                    </div>

                </div>


                <div className="w-[60%] ml-16  rounded-lg p-10 shadow border bg-gray-800 border-gray-700 h-fit">
                    <h1 className='text-white text-2xl'>About</h1>
                    <p className='text-gray-500 text-lg'>
                        {eng.bio}
                    </p>
                    <h1 className='text-white text-2xl mt-6'>Blogs <Link className='text-sm text-blue-500' to={`/${userId}/dashboard/blogs/`}>See All</Link></h1>
                    {userBlogs.length == 0 ? (
                        <div className='w-full h-[400px] bg-gray-700 flex justify-center items-center rounded mt-3'>
                            <p className='text-xl text-gray-100'>No Blogs </p>

                        </div>
                    ) : (

                        userBlogs.map((blog) => (
                            <Link to={`/blogs/${blog.id}`} className="block max-w-sm p-6 bg-white my-5  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">For: {blog.clientName}</p>
                            </Link>
                        ))

                    )}

                    <h1 className='text-white text-2xl mt-6'>Projects <Link className='text-sm text-blue-500' to={`/${userId}/dashboard/projects`}>See All</Link></h1>
                    {userProjects.length == 0 ? (
                        <div className='w-full h-[400px] bg-gray-700 flex justify-center items-center rounded mt-3'>
                            <p className='text-xl text-gray-100'>No Project</p>
                        </div>
                    ) : (

                        userProjects.map((blog) => (
                            <Link to={`/projects/${blog.id}`} className="block max-w-sm p-6 bg-white my-5  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">For: {blog.clientName}</p>
                            </Link>
                        ))

                    )}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default User
