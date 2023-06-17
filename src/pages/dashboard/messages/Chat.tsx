import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Chat = () => {

    const socket = io('http://localhost:8080');
    const [roomId, setRoomId] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const { senderId, reId } = useParams()

   
    const joinRoom = () => {
        const newRoomId = `${senderId}${reId}Room` // Generate a unique room ID
        setRoomId(newRoomId);
        console.log(newRoomId)
        socket.emit('joinRoom', newRoomId);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        const newMessage = {
            sender: 'User',
            text: message,
        };
        socket.emit('chatMessage', { room: roomId, message: newMessage });
        socket.on('chatMessage', (message) => {
            setMessages([...messages, newMessage]);
        });

        setMessage('');
    };


    return (
        <div className="flex flex-col h-screen">
            <div className="flex items-center justify-center h-16 bg-gray-800 text-white">
                <h1 className="text-lg font-bold">Chat Room</h1>
            </div>
            {!roomId ? (
                <div className="flex items-center justify-center h-full">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={joinRoom}
                    >
                        Join Room
                    </button>
                </div>
            ) : (
                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="flex flex-col space-y-2">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-2 rounded-md"
                            >
                                <p className="text-sm font-medium">{msg.sender}</p>
                                <p>{msg.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {roomId && (
                <div className="flex items-center justify-center h-16 bg-gray-200">
                    <form className="flex items-center space-x-2" onSubmit={sendMessage}>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded"
                            placeholder="Type a message..."
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chat;


