import React, { useState, useRef } from 'react'
import Navbar from '../utility/navbar'
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const CreateBlog = () => {
    const editorRef = useRef(null)
    const [title, setTitle] = useState()
    const { id } = useParams()

    const handleTitle = (e: any) => {
        setTitle(e.target.value)
        e.preventDefault()
    }
    const onSubmit = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
        let cont = editorRef.current.getContent()
        axios.post('https://nodeasaltask-production.up.railway.app/blogs',
        { title: title, content: cont, userId: id })
        .then((res) => { console.log(res) })
        .catch((err) => {
            console.log(err)
        });

    };
return (
    <div className='flex w-full'>
        <Navbar />
        <div className="w-full">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <form>
                            <div className="mb-4">
                                <label className="text-xl text-gray-600">Title <span className="text-red-500">*</span></label><br></br>
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" value={title} onChange={(e) => handleTitle(e)} name="title" id="title" required />
                            </div>
                            <label className='text-xl text-gray-600'>Content</label>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>This is the initial content of the editor.</p>"
                                apiKey="v68lp2edzpye7f2kml792hns9oqdyp6te8e8jkkeza6gtidq"
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
                            <div className="flex p-1">
                                <button onClick={() => onSubmit()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Publish</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

}

export default CreateBlog
