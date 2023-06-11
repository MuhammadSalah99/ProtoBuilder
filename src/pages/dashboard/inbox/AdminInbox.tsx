import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Navbar from '../utility/navbar'
const AdminInbox: React.FC = () => {
    const [content, setContent] = useState('');
    const [recInfo, setRecInfo] = useState({})
    const [all, setAll] = useState([])
    const [sen, setSen] = useState({})
    const { user } = useContext(AuthContext)
    useEffect(() => {
        axios.get(`https://nodeasaltask-production.up.railway.app/api/msg/messages/${senderId}/${reciverId}`)
            .then((res) => {
                setTimeout(() => {
                    setAll(res.data)
                    console.log(res.data)
                }, 100)
            })

            .catch((err) => {
                console.log(err)
            })
        axios.get(`https://nodeasaltask-production.up.railway.app/api/users/${reciverId}`)
            .then((res) => {
                setTimeout(() => {
                    setRecInfo(res.data)
                    console.log(res.data)

                }, 100)
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get(`https://nodeasaltask-production.up.railway.app/api/users/${senderId}`)
            .then((res) => {
                setTimeout(() => {
                    setSen(res.data)
                    console.log(res.data)

                }, 100)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    const { senderId, reciverId } = useParams()
    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('https://nodeasaltask-production.up.railway.app/api/msg/messages', {
                senderId,
                receiverId: reciverId,
                content,
            })
                .then((res) => {
                    console.log('Message sent successfully');
                    setContent('')
                    console.log(res)
                });

        } catch (error) {
            console.error('Failed to send message', error);
        }
    };

    return (
        <div className='flex'>
            <Navbar />
            <div className="container mx-auto shadow-lg rounded-lg h-screen">
                <div className="flex flex-row justify-between h-[92vh]  bg-gray-800 h-full">
                    <div className="w-full px-5 flex flex-col justify-between  h-full relative">
                        <div className="flex flex-col mt-5 overflow-y-scroll h-screen">
                            {all.map((msg) => (
                                msg.sender.id == senderId ?
                                    <div className="flex justify-end mb-4">
                                        <div
                                            className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                                        >
                                            {msg.content}
                                        </div>
                                        <img
                                            src={sen.profilePic}
                                            className="object-cover h-8 w-8 rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    :
                                    <div className="flex justify-start mb-4">
                                        <img
                                            src={recInfo.profilePic}
                                            className="object-cover h-8 w-8 rounded-full"
                                            alt=""
                                        />
                                        <div
                                            className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                            ))}


                        </div>
                        <form onSubmit={handleSubmit} className="py-5 bottom-0 px-3 flex justify-between items-center">
                            <input
                                className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                value={content}
                                onChange={handleContentChange}
                                placeholder="type your message here..."
                            />
                            <button type='submit' className=" w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
                        </form>
                    </div>
                    {/* end message */}
                </div>
            </div>
        </div>
    );
};


export default AdminInbox;

