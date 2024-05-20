import React, { useEffect } from 'react';

const ChatbotComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;
    script.setAttribute('chatbotId', 'kvhCxO7X_gChEGHikhBW_');
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatbotComponent;
