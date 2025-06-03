import React, { useRef, useEffect } from 'react';
import './ChatWindow.css'; 

function ChatWindow({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.sender}`}>
          <div className="message-content">{msg.text}</div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatWindow;