const VideoCards = ({ info }) => {
  const snippet = info?.snippet;
  const thumbnail = snippet?.thumbnails?.medium?.url;
  const channelTitle = info?.snippet?.channelTitle

  const shortTitle = snippet?.title?.slice(0, 40) + "...";


  return (
    <div className=" flex flex-col w-full h-full shadow-md rounded-lg">
      <img 
      className="px-2 py-2 rounded-sm "
      src={thumbnail} alt="thumbnail" />
      <ul>
        <li className="text-sm px-2 font-semibold line-clamp-2">{shortTitle}</li>
        <li className="px-2 font-semibold">{channelTitle}</li>

      </ul>
      
    </div>
  );
};



export default VideoCards;