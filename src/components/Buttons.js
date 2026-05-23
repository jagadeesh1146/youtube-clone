import React from 'react'

const Buttons =({name})=> {
  return (
    <div>
        <button className="  px-4 py-1 bg-gray-300 rounded-full whitespace-nowrap text-sm hover:bg-gray-500 
        hover:scale-110 transition-transform duration-300 ease-in-out">{name}</button>

    </div>
  )
}

export default Buttons