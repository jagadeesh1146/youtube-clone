import React from 'react'

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex gap-3 bg-slate-100 p-3 rounded-lg">
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="user-logo"
        className="w-8 h-8 rounded-full"
      />

      <div>
        <div className="font-bold">{name}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Comment;