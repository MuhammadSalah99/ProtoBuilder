import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const socket = io('https://nodeasaltask-production.up.railway.app/');
    const room = "3434asdf3"

    useEffect(() => {
        // Handle new messages received from the server\a\a
        socket.emit('joinRoom', room);
        socket.on('newMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Clean up the socket connection when the component unmounts
        return () => {
            socket.emit('leaveRoom', room);
            socket.disconnect();
        };
    }, []);

    const handleSendMessage = (messageContent) => {
        const message = {
            senderId: 6,
            receiverId: 1,
            content: messageContent,
        };

        // Save the message to the database using Sequelize
        axios.post('https://nodeasaltask-production.up.railway.app/api/msg/messages', message)
            .then((response) => {
                // Handle successful save
                console.log('Message saved:', response.data);
            })
            .catch((error) => {
                // Handle error
                console.error('Error saving message:', error);
            });

        // Send the message to the server
        socket.emit('newMessage', message);
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
            <form
                className="mt-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    const messageInput = e.target.elements.message;
                    handleSendMessage(messageInput.value);
                    messageInput.value = '';
                }}
            >
                <input
                    type="text"
                    name="message"
                    placeholder="Type your message..."
                    className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chat;


