import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const SendMessages: React.FC = () => {
    const [senderId, setSenderId] = useState('');
    const [receiverId, setReceiverId] = useState('');
    const [content, setContent] = useState('');
    const {user} = useContext(AuthContext)
    const handleSenderIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSenderId(e.target.value);
    };

    const handleReceiverIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        setReceiverId(e.target.value);
    };

    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('https://nodeasaltask-production.up.railway.app/api/messages', {
                senderId,
                receiverId,
                content,
            }, {
                headers: {
                    Authorization: user.authToken
                }
            });
            console.log('Message sent successfully');
            setSenderId('');
            setReceiverId('');
            setContent('');

        } catch (error) {
            console.error('Failed to send message', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Send Message</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Sender ID:</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        value={senderId}
                        onChange={handleSenderIdChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Receiver ID:</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        value={receiverId}
                        onChange={handleReceiverIdChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Content:</label>
                    <textarea
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        value={content}
                        onChange={handleContentChange}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default SendMessages;

