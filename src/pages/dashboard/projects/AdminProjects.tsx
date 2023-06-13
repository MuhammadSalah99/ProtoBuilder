import React, { useEffect, useState } from 'react'
import { useParams ,Link } from 'react-router-dom'
import Navbar from '../utility/navbar'
import axios from 'axios'
const AdminProjects = () => {
    const [projects, setProjects] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://nodeasaltask-production.up.railway.app/api/projects/by/${id}`)
            .then((res) => {
                setTimeout(() => {
                    console.log(res)
                    setProjects(res.data)
                    console.log(projects)
                }, 500)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const deleteBlog = (id: number) => {
        axios.delete(`https://nodeasaltask-production.up.railway.app/api/projects/${id}`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        let newProjects = projects.filter((project) => {
            if(project.id != id) {
                return true
            }
        })
        setProjects(newProjects)

    }
    return (
        <div className='flex h-screen'>
            <Navbar />
            <div className='flex m-2 p-10 flex-col w-full'>
                <h1 className='text-3xl'>Projects</h1>
                <Link to="create" className="text-white mt-4 mb-4  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  w-[160px]">Publish a Project</Link>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Project Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Client Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr className="bg-white border-b" key={project.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {project.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {project.clientName}
                                    </td>
                                    <td className="px-1 py-4 flex justify-around  items-start w-24">
                                        <Link to={`${project.id}/edit`} className='font-medium text-blue-600  hover:underline cursor-pointer'>Edit</Link>
                                        <p onClick={() => deleteBlog(project.id)} className="font-medium text-blue-600  hover:underline cursor-pointer">Delete</p>
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

export default AdminProjects
