
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Navbar from '../utility/navbar'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProject = () => {

    const [title, setTitle] = useState('');
    const [clinetName, setClientName] = useState('');
    const [content, setContent] = useState('');
    const { id, projectId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://nodeasaltask-production.up.railway.app/api/projects/${projectId}`)
            .then((res) => {
                setTimeout(() => {
                    console.log(res.data)
                    setTitle(res.data.title)
                    setContent(res.data.content)
                    setClientName(res.data.clientName)
                }, 500)
            })
            .catch((err) => {
                setTimeout(() => {
                    console.log(err)
                }, 500)
            })

    }, [])
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleClientName = (e: ChangeEvent<HTMLInputElement>) => {
        setClientName(e.target.value);
    };
    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        axios.put(`https://nodeasaltask-production.up.railway.app/api/projects/${projectId}`,
            {
                title: title,
                content: content,
                clientName: clinetName
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        setTimeout(() => {
            navigate(`/${id}/dashboard/projects`)
            setTitle('');
            setContent('');
        }, 500)
    };
    return (
        <div className='flex w-full h-screen'>
            <Navbar />
            <div className="w-full mx-auto mt-8 p-8">
                <h2 className="text-2xl font-bold mb-4">Edit Project Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Title:</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Title..."
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Client Name:</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                            value={clinetName}
                            onChange={handleClientName}
                            placeholder="Client..."
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Content:</label>
                        <textarea
                            className="border border-gray-300 rounded px-3 h-[300px] py-2 w-full"
                            value={content}
                            placeholder="content..."
                            onChange={handleContentChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditProject
