// src/App.js
import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import './App.css'; // Main application CSS
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize from localStorage or default to false (light mode)
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Effect to save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    // Apply or remove the 'dark-mode' class to the body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleSendMessage = async (text) => {
    const newMessage = { sender: 'user', text: text };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsLoading(true);

    try {
      const aiResponse = await getAiResponse(text);
      const aiMessage = { sender: 'ai', text: aiResponse };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage = { sender: 'ai', text: "Sorry, I couldn't process your request right now." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  async function getAiResponse(userMessage) {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-05-20" }); 

    try {
      const result = await model.generateContent(userMessage);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error generating AI content:", error);
      if (error.response && error.response.data) {
         console.error("API Error Details:", error.response.data);
      }
      throw new Error("Failed to get AI response.");
    }
  }

  return (
    <div className={`chat-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="chat-header">
        <h1 className="chat-title">HS AI Chat</h1>
        <button
          className="dark-mode-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <ChatWindow messages={messages} />
      {isLoading && <div className="loading-indicator">AI is typing...</div>}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;