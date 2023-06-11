import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Chat = () => {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const { senderId, reId } = useParams()
    const socket = io('http://localhost:8080');
    const roomID = `ID ${senderId} ${reId}`


    useEffect(() => {
        socket.emit('newUser', { userName: "test", socketID: socket.id });
        socket.on('messageResponse', (data) => setMessages([...messages, data]));

    }, [socket, messages])

    const handleSendMessage = () => {
        e.preventDefault();
        socket.emit('message', {
            content: message,
            senderId: senderId,
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id,
        })
        setMessage('');
    };



    return (
        <div className="container mx-auto">
            <div className="bg-white p-4 rounded-lg shadow">
                {/* Render the chat messages */}
                {messages.map((message) => (
                    <div key={message.id} className="mb-2">
                        <span className="font-bold">{message.senderId}:</span>{' '}
                        {message.content}
                    </div>
                ))}
            </div>

            {/* Send message form */}
            <form className="form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Write message"
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="sendBtn">SEND</button>
            </form>

        </div>
    );
};

export default Chat;


