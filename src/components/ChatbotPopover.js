import React, { useState, useEffect, useRef } from 'react';
import './ChatbotPopover.css';

const ChatbotPopover = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { type: "response", text: "I'm Jane, your personal weather assistant. Ask me anything!" },
    ]);
    const [inputText, setInputText] = useState("");
    const chatContainerRef = useRef(null);

    const handleSend = () => {
        // Don't send empty message
        if (inputText.trim() === "") return;

        setMessages((prevMessages) => [
        ...prevMessages,
        { type: "input", text: inputText },
        ]);

        setInputText("");
    };

    useEffect(() => {
        // Scroll to the bottom of the chat every time there's a new message
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [messages]);

    return (
        <div className="popover">
        <div className="header">
            <span className="close-btn" onClick={onClose}>&times;</span>
            <h1 className="chatbot-name">AI Assistant</h1>
        </div>
        <div className="chat-container" ref={chatContainerRef}>
            {messages.map((message, index) => (
            <div key={index} className={`chat-bubble ${message.type}`}>
                <p className={message.type}>{message.text}</p>
            </div>
            ))}
        </div>
        <div className="footer">
            <input
            className="chat-input"
            placeholder="Type your message here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            />
            <button className="send-btn" onClick={handleSend}>➣</button>
        </div>
        </div>
    );
};

export default ChatbotPopover;
