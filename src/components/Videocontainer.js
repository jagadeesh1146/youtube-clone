import React from 'react'
import { useEffect , useState } from 'react'
import { YOUTUBE_API_VIDEOS } from '../utils/constants'
import Videocards from './Videocards'
import { Link } from 'react-router-dom'

const Videocontainer = () => {

  const [videos , setVideos] = useState([])


  useEffect(()=>{

    getVideos()

  },[])

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_API_VIDEOS) 
    const json = await data.json()
    console.log(json.items)
    setVideos(json.items)
  }



  return (
  <div className="flex flex-wrap">
   {videos ?.map((video) => ( 
    <div key={video.id} className="w-1/4  h-30 p-2 hover:scale-105 hover:shadow-xl 
     cursor-pointer transform transition duration-300 ease-in-out">
      <Link to = {"/watch?v=" + video.id}>
      <Videocards info={video} />
      </Link>
    </div>
  ))}
</div>
  )
}

export default Videocontainer