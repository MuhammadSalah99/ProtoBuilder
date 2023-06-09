import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer from './utility/Footer'
import Navbar from './utility/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Pannellum, PannellumVideo } from "pannellum-react";
const Project = () => {

    const [project, setProject] = useState({})
    const { projectId } = useParams()
    const [projectImages, setProjectImages] = useState([])
    const [user, setUser] = useState({ id: '' })
    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://nodeasaltask-production.up.railway.app/api/projects/${projectId} `)
                .then((res) => {
                    setProject(res.data)
                    setProjectImages(res.data.projectImages)
                    setUser(res.data.user)
                    console.log(project)
                    console.log(project)
                })
                .catch((err) => { console.log(err) })
        }, 500)

    }, [])

    return (
        <div className=' w-screen  bg-gray-900'>
            <Navbar />
            <div className='w-[80%] m-auto p-10 h-auto'>
                <h1 className='text-3xl text-white'>{project.title}</h1>
                <Link to={`/users/${user.id}`}><span className='mb-3 font-normal underline text-gray-400'>By:{project.user ? <span> {project.user.firstName} {project.user.lastName}</span> : ''}  </span></Link>
                <div className={`w-full mt-10  h-[450px] `} style={{
                    backgroundImage: `url(${project.thumbNail})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                </div>
                <p className='mt-3 text-gray-200'> Client Name: {project.clientName}</p>

                <div className='text-white mt-10 mb-5'> {project.content} </div>
                <h3 className='text-xl mb-2 text-gray-200'>Project Images: </h3>
                <Carousel>
                    {projectImages.map((img) => (
                        <div className='h-[400px]'>
                            <img src={img} />
                        </div>
                    ))}
                </Carousel>
                <Pannellum
                    width="100%"
                    height="500px"
                    image={'https://pannellum.org/images/alma.jpg'}
                    pitch={10}
                    yaw={180}
                    hfov={110}
                    autoLoad
                    onLoad={() => {
                        console.log("panorama loaded");
                    }}
                >
                    <Pannellum.Hotspot
                        type="info"
                        text="Info Hotspot Text 3"
                        pitch={12.41}
                        yaw={117.76}
                        handleClick={(evt, name) => console.log(name)}
                        name="image info"
                    />

                </Pannellum>
            </div>
            <Footer />
        </div>
    )
}

export default Project
