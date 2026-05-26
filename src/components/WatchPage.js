import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { MY_GOOGLE_API_KEY } from "../utils/constants";
import Commentscontainer from "./Commentscontainer";
import Livechat from "./Livechat";
import Chatinput from "./Chatinput";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    if (videoId) getVideoDetails();
  }, [videoId]);

  const getVideoDetails = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${MY_GOOGLE_API_KEY}`
      );
      const json = await data.json();
      console.log(json)
      setVideoData(json.items[0]);
    } catch (err) {
      console.error(err);
    }
  };

  if (!videoId) return <h1>No Video Found</h1>;

 return (
  
  <div className="p-4 flex">
  
  <div className="w-[900px] flex flex-col gap-1">

    {/* 🎬 Video */}
    <iframe
      className="w-full h-[500px] rounded-lg"
      src={`https://www.youtube.com/embed/${videoId}`}
      allowFullScreen
    ></iframe>

    {videoData && (
      <div>
        <h1 className="text-xl font-bold">
          {videoData?.snippet?.title}
        </h1>

        <p className="text-gray-600">
          {videoData?.statistics?.viewCount} views
        </p>

        <p className="font-semibold">
          {videoData?.snippet?.channelTitle}
        </p>
      </div>
      
      
    )}
   
   <Commentscontainer/>
   

  </div>
   <div >
      <Livechat/>
      <Chatinput/>
    </div>
    
  
</div>


);
};

export default WatchPage;