
 export const MY_GOOGLE_API_KEY = process.env.REACT_APP_MY_GOOGLE_API_KEY;


 export const YOUTUBE_API_VIDEOS =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + MY_GOOGLE_API_KEY ;

//export const YOUTUBE_SEARCH_API ="https://suggestqueries.google.com/complete/search?client=firefox&q="

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?https://suggestqueries.google.com/complete/search?client=firefox&q=";
