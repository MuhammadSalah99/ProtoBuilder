import Navbar from '../utility/navbar'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams()
    const navigate = useNavigate()
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {

            console.log(editorRef.current.getContent());
            let con = editorRef.current.getContent()
            setContent(con)
        }
    };
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        axios.post('https://nodeasaltask-production.up.railway.app/api/blogs',
            {
                title: title,
                content: content,
                userId: id
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        setTimeout(() => {
            navigate(`/${id}/dashboard/blogs`)
            setTitle('');
            setContent('');
        }, 500)
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
                        <label className="block mb-2 font-bold">Content:</label>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue="<p>This is the initial content of the editor.</p>"
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
                        <button

                            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={log}>Submit</button>

                    </div>
                </form>
            </div>
        </div>
    )

}

export default CreateBlog
