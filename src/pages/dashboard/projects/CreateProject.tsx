import Navbar from '../utility/navbar'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { storage } from '../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
const CreateProject = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [clinetName, setClientName] = useState('')
    const [thumbnail, setThumbanil] = useState<File | null>(null)
    const [linkPic, setLinkPic] = useState('')
    const [fileArray, setFileArray] = useState([]);
    const [image360, setImage360] = useState('')
    const { id } = useParams()
    const [userId, setUserId] = useState(id)
    const navigate = useNavigate()

    const handleThumbChange = (e: ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0];
        setThumbanil(file);
        console.log(thumbnail)
        if (file) {
            const imageRef = ref(storage, `projects/${file.name}`)
            uploadBytes(imageRef, file).then(() => {
                getDownloadURL(imageRef).then((url) => {
                    console.log(url)
                    setLinkPic(url)
                    alert(url)
                })
            }).catch((err) => { console.log(err) })
        }


    };
    const handle360Upload = (e: ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0];
        setThumbanil(file);
        console.log(thumbnail)
        if (file) {
            const imageRef = ref(storage, `projects/${file.name}`)
            uploadBytes(imageRef, file).then(() => {
                getDownloadURL(imageRef).then((url) => {
                    console.log(url)
                    setImage360(url)
                    alert(url)
                })
            }).catch((err) => { console.log(err) })
        }


    };
    const uploadMultipleFiles = (e) => {



        const file = e.target.files?.[0];
        setThumbanil(file);
        if (file) {
            const imageRef = ref(storage, `projects/${file.name}`)
            uploadBytes(imageRef, file).then(() => {
                getDownloadURL(imageRef).then((url) => {
                    setLinkPic(url)

                    setFileArray((prevFiles) => [...prevFiles, url]);
                    alert(url)
                })
            }).catch((err) => { console.log(err) })
        }

    };

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
        axios.post('https://nodeasaltask-production.up.railway.app/api/projects',
            {
                title: title,
                content: content,
                userId: userId,
                thumbNail: linkPic,
                projectImages: fileArray,
                image360: image360,
                clientName: clinetName
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        setTimeout(() => {
            navigate(`/${id}/dashboard`)
            setTitle('');
            setContent('');
        }, 500)
    };
    return (
        <div className='flex w-full h-full'>
            <Navbar />
            <div className="w-full mx-auto mt-8 p-8 ">
                <h2 className="text-2xl font-bold mb-4">Create a Project </h2>
                <form onSubmit={handleSubmit} className="h-screen">
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
                    <div className="mb-4">

                        <label className="block mb-2 text-sm font-medium text-gray-900" >
                            Project 360 image:</label>

                        <img key={image360} src={image360} className='w-16 h-16 mr-6' />
                        <input
                            type="file"
                            accept="image/*"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                            onChange={handle360Upload}
                        />
                    </div>

                    <div className="mb-4">

                        <label className="block mb-2 text-sm font-medium text-gray-900" >
                            Project Thumbnail:</label>

                        <img key={linkPic} src={linkPic} className='w-16 h-16 mr-6' />
                        <input
                            type="file"
                            accept="image/*"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                            onChange={handleThumbChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <div className="flex mb-4">
                            {fileArray.map((url) => (
                                <img key={url} src={url} className='w-16 h-16 mr-6' />
                            ))}
                        </div>
                        <div className="form-group">
                            <input type="file" className="form-control" onChange={uploadMultipleFiles} multiple />
                        </div>

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

export default CreateProject
