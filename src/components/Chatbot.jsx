import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your PrepMark assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    if (message.includes('help') || message.includes('support')) {
      return "I'm here to help! You can ask me about NMMS preparation, study plans, or any feature of PrepMark.";
    } else if (message.includes('study') || message.includes('learn')) {
      return "Great! I recommend starting with our practice tests and focusing on your weak areas. Would you like me to suggest a study plan?";
    } else if (message.includes('test') || message.includes('exam')) {
      return "Our practice tests are designed to simulate the real NMMS exam. You can access them from the Quick Access panel!";
    } else if (message.includes('hi') || message.includes('hello')) {
      return "Hello! Welcome to PrepMark. I'm excited to help you with your NMMS preparation journey!";
    } else {
      return "That's a great question! For detailed assistance, you can contact our support team or explore our comprehensive study materials.";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className={`chatbot-button ${isOpen ? 'open' : ''}`} onClick={toggleChatbot}>
        <div className="robot-icon">🤖</div>
        {!isOpen && <div className="chat-pulse"></div>}
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="chatbot-panel">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-title">
              <span className="bot-avatar">🤖</span>
              PrepMark Assistant
            </div>
            <button className="close-btn" onClick={toggleChatbot}>×</button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">{message.timestamp}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="message-input"
            />
            <button onClick={sendMessage} className="send-btn">
              <span>📤</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;