
import Navbar from '../utility/navbar'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { storage } from '../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
const EditBlogs = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [thumbnail, setThumbanil] = useState<File | null>(null)
    const { id, blogId } = useParams()
    const [linkPic, setLinkPic] = useState('')
    const [errorMessage, setErrorMessage] = useState({ code: 200, message: 'ok' })
    const [expert, setExpert] = useState('')
    const navigate = useNavigate()
    const editorRef = useRef(null);


    useEffect(() => {
        axios.get(`https://nodeasaltask-production.up.railway.app/api/blogs/${blogId}`)
            .then((res) => {
                setTimeout(() => {
                    console.log(res.data)
                    setTitle(res.data.title)
                    setContent(res.data.content)
                    setExpert(res.data.expert)
                    setLinkPic(res.data.thumbNail)


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

    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };
    const handleExerptChange = (e: ChangeEvent<HTMLInputElement>) => {
        setExpert(e.target.value);
    };
    const handleThumbChange = (e: ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0];
        setThumbanil(file);
        console.log(thumbnail)
        if (file) {
            const imageRef = ref(storage, `blog/${file.name}`)
            uploadBytes(imageRef, file).then(() => {
                getDownloadURL(imageRef).then((url) => {
                    console.log(url)
                    setLinkPic(url)
                    alert(url)
                })
            }).catch((err) => { console.log(err) })
        }


    };
    const log = () => {
        if (editorRef.current) {

            console.log(editorRef.current.getContent());
            let con = editorRef.current.getContent()
            setContent(con)
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        axios.put(`https://nodeasaltask-production.up.railway.app/api/blogs/${blogId}`,
            {
                title: title,
                expert: expert,
                thumbNail: linkPic,
                content: content,
            })
            .then((res) => {
                console.log(res)
                setTimeout(() => {
                    navigate(`/${id}/dashboard/blogs`)
                    setTitle('');
                    setContent('');
                }, 500)
            })
            .catch((err) => {
                console.log(err)
            })

    };
    return (
        <div className='flex w-full'>
            <Navbar />
            <div className="w-full mx-auto mt-8 p-8">
                <h2 className="text-2xl font-bold mb-4">Create a Blog Post</h2>
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
                        <label className="block mb-2 font-bold">Exerpt:</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                            value={expert}
                            onChange={handleExerptChange}
                            placeholder="Title..."
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Content:</label>
                        <Editor
                            initialValue={content}
                            onInit={(evt, editor) => editorRef.current = editor}
                            apiKey='v68lp2edzpye7f2kml792hns9oqdyp6te8e8jkkeza6gtidq'
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                        <div className="mb-4">

                            <label className="block mb-2 text-sm font-medium text-gray-900" >
                                Blog Thumbnail:</label>
                            <img key={linkPic} src={linkPic} className='w-24 h-24 mr-6' />
                            <p className='text-sm cursor-pointer mb-2 mt-2 ' onClick={() => setLinkPic('')}>remove image</p>
                            <input
                                type="file"
                                accept="image/*"
                                className="border border-gray-300 rounded px-3 py-2 w-full"
                                onChange={handleThumbChange}
                            />
                        </div>
                        <button

                            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={log}>Submit</button>
                        {errorMessage.code == 400 && (
                            <div className="text-red-500 text-xl font-bold">{errorMessage.message}</div>
                        )}

                    </div>
                </form>
            </div>
        </div>

    )
}

export default EditBlogs
