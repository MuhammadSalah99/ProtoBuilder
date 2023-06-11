import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Filters from './utility/Filters'
import Footer from './utility/Footer'
import Navbar from './utility/Navbar'
const Home = () => {
    const [engs, setEngs] = useState([])
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if(!user) {
            navigate("/")
        }
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://nodeasaltask-production.up.railway.app/api/users/');
                setEngs(response.data);
                console.log(engs)
            } catch (error) {
                console.error(error);
            }
        };

        setTimeout(() => {
            fetchUsers();
        }, 500)
    }, []);
    return (

        <div className='w-screen bg-gray-50 dark:bg-gray-900'>
            <Navbar />
            <div className='flex w-full p-12 flex-col h-full '>
                {engs.map((eng) => (
                    <Link to="#" className="flex flex-col mb-3 w-2/3 h-[200px] items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row relative hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-full  md:w-48 md:rounded-none md:rounded-l-lg" src={eng.profilePic} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{eng.firstName} {eng.lastName} -  <span className="text-gray-400 text-sm font-light">{eng.major}</span></h5>
                            <span className='mb-3 font-normal text-gray-700 dark:text-gray-400'> {eng.officeAddress} - {eng.city}  </span>
                             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{eng.bio}</p>
                            <Link to={`/${user.id}/message/${eng.id}`} type="button" className="text-white absolute right-3 bottom-1 bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-transparent dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" fill-rule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Icon description</span>
                            </Link>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>

    )
}

export default Home
