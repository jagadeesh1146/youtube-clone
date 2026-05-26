import React from 'react'
import Chatmessages from './Chatmessages'
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const Livechat = () => {
  const messages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  const chatRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          id: Date.now(),
          name: "Random User",
          message: "Hello live chat 🔥"
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [dispatch]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatRef}
      className="border w-96 h-[500px] rounded-md mx-2 my-1 p-2 overflow-y-scroll"
    >
      {messages.map((msg) => (
        <Chatmessages
          key={msg.id}
          message={msg.message}
          name={msg.name}
        />
      ))}

      
    </div>
  );
};

export default Livechat;