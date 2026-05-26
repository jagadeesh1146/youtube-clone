import React from 'react'

const Chatmessages = ({name , message}) => {
  return (
    <div className="flex items-center gap-2 m-1 p-1">
        <img src="https://i.pravatar.cc/40"
        className="h-6 rounded"
         alt="user"
          />
          <span className="font-semibold text-sm">{name}</span>
          <span className="text-sm">{message}</span>

          

    </div>
  )
}

export default Chatmessages