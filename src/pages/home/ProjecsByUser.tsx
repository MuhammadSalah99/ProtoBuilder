import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Filters from './utility/Filters'
import Footer from './utility/Footer'
import Navbar from './utility/Navbar'
const ProjectsByUser = () => {
    const [projects, setProjects] = useState([])
    const [authe, setAuthe] = useState({})
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { userId } = useParams()
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`https://nodeasaltask-production.up.railway.app/api/projects/by/${userId}`);
                setProjects(response.data);
                console.log(projects)
            } catch (error) {
                console.error(error);
            }
        };

        setTimeout(() => {
            fetchBlogs();
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

        <div className='w-screen bg-gray-900 px-12'>
            <Navbar />
            <h1 className='text-white font-bold mb-3 text-2xl my-10'>{authe.firstName} {authe.lastName} Projects:</h1>

            <div className='flex py-3 w-full h-full justify-start flex-wrap'>
                {projects.map((blog) => (

                    <div className="  w-[22%] border rounded-lg ml-3 mb-4 shadow bg-gray-800 border-gray-700">
                        <Link to={`/projects/${blog.id}`}>
                            <div className={`w-full  h-[350px] `} style={{
                                backgroundImage: `url(${blog.thumbNail})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            </div>
                        </Link>
                        <div className="p-5">

                            <Link to={`/projects/${blog.id}`}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{blog.title}</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-400">{blog.content}</p>
                            <span className='mb-3 font-normal text-gray-400'>By:{blog.user ? <Link to={`/users/${blog.user.id}`} > {blog.user.firstName} {blog.user.lastName}</Link> : ''}  </span><br />
                            <Link to={`/projects/${blog.id}`} className="inline-flex mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                Know more

                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>

                ))}
            </div>
            <Footer />
        </div>

    )
}

export default ProjectsByUser
