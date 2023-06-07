import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Navbar from '../../home/utility/Navbar';

const SendMessages: React.FC = () => {
    const [content, setContent] = useState('');
    const [sentMessages, setSetMessages] = useState([])
    const [receivedMessages, setReceivedMessages] = useState([])
    const [all, setAll] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        axios.get(`https://nodeasaltask-production.up.railway.app/api/msg/messages/${senderId}`)
            .then((res) => {
                setTimeout(() => {

                    setAll(res.data)
                    console.log(res.data)
                    let sent = res.data.filter((msg) => {
                        if (msg.sender.id == senderId) {
                            return msg
                        }
                    });
                    let received = res.data.filter((msg) => {
                        if (msg.receiver.id == senderId) {
                            return msg
                        }
                    });
                    setSetMessages(sent)
                    setReceivedMessages(received)
                    console.log(received)
                    console.log(sent)
                }, 1000)
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
            });
            console.log('Message sent successfully');
            setContent('');

        } catch (error) {
            console.error('Failed to send message', error);
        }
    };

    return (
        <div className="container mx-auto shadow-lg rounded-lg h-screen">
            <Navbar />
            <div className="flex flex-row justify-between h-[92%]  bg-gray-800">
                {/* chat list */}
                <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
                    {/* search compt */}
                    <div className="border-b-2 py-4 px-2">
                        <input
                            type="text"
                            placeholder="search chatting"
                            className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                        />
                    </div>
                    {/* end search compt */}
                    {/* user list */}
                    <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold text-white">Luis1994</div>
                            <span className="text-gray-500">Pick me at 9:00 Am</span>
                        </div>
                    </div>
                    <div className="flex flex-row py-4 px-2 items-center border-b-2">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/otT2199XwI8/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold text-white">Everest Trip 2021</div>
                            <span className="text-gray-500">Hi Sam, Welcome</span>
                        </div>
                    </div>
                    <div className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold text-white">MERN Stack</div>
                            <span className="text-gray-500">Lusi : Thanks Everyone</span>
                        </div>
                    </div>
                    <div className="flex flex-row py-4 px-2 items-center border-b-2">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold text-white">Javascript Indonesia</div>
                            <span className="text-gray-500">Evan : some one can fix this</span>
                        </div>
                    </div>
                    <div className="flex flex-row py-4 px-2 items-center border-b-2">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-lg font-semibold text-white">Javascript Indonesia</div>
                            <span className="text-gray-500">Evan : some one can fix this</span>
                        </div>
                    </div>
                    <div className="flex flex-row py-4 px-2 items-center border-b-2">
                        <div className="w-1/4">
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                className="object-cover h-12 w-12 rounded-full"
                                alt=""
                            />
                        </div>
                        <div className="w-full text-white">
                            <div className="text-lg font-semibold">Javascript Indonesia</div>
                            <span className="text-gray-500">Evan : some one can fix this</span>
                        </div>
                    </div>
                    {/* end user list */}
                </div>
                {/* end chat list */}
                {/* message */}
                <div className="w-full px-5 flex flex-col justify-between">
                    <div className="flex flex-col mt-5">
                        {sentMessages.map((msg) => (
                            <div className="flex justify-end mb-4">
                                <div
                                    className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                                >
                                    {msg.content}
                                </div>
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-8 w-8 rounded-full"
                                    alt=""
                                />
                            </div>
                        ))}
                        {receivedMessages.map((msg) => (
                        <div className="flex justify-start mb-4">
                            <img
                                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
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
                    <form onSubmit={handleSubmit} className="py-5 px-3 flex justify-between">
                        <input
                            className="w-2/3 bg-gray-300 py-5 px-3 rounded-xl"
                            type="text"
                            value={content}
                            onChange={handleContentChange}
                            placeholder="type your message here..."
                        />
                        <button type='submit' className=" w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
                    </form>
                </div>
                {/* end message */}
                <div className="w-2/5 border-l-2 px-5">
                    <div className="flex flex-col">
                        <div className="font-semibold text-xl py-4 text-white">Mern Stack Group</div>
                        <img
                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                            className="object-cover rounded-xl h-64"
                            alt=""
                        />
                        <div className="font-semibold py-4 text-white">Created 22 Sep 2021</div>
                        <div className="font-light text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                            perspiciatis!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SendMessages;

