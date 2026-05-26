import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../utils/chatSlice'

const Chatinput = () => {
  const [userInput, setUserInput] = useState("")
  const dispatch = useDispatch()

  const handleSend = (e) => {
    e.preventDefault()

    if (!userInput.trim()) return

    dispatch(
      addMessage({
        id: Date.now(),
        name: "Jagadeesh",
        message: userInput,
      })
    )

    setUserInput("")
  }

  return (
    <div className="w-full mx-2 my-2 border rounded-sm p-2">
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Say something..."
          className="flex-1 p-2 border rounded-md outline-none"
        />

        <button
          type="submit"
          className="bg-red-500 text-white px-4 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Chatinput