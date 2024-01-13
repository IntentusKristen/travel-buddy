import React from 'react';
import './ChatbotPopover.css';

const ChatbotPopover = ({ onClose }) => {
  return (
    <div className="popover">
      <span className="close-btn" onClick={onClose}>&times;</span>
      <p>AI Assistant</p>
    </div>
  );
};

export default ChatbotPopover;