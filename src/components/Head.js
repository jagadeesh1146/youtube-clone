import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion , setShowSuggestion] = useState(false)

  const dispatch = useDispatch();

  const searchCache = useSelector((store)=>store.search)


  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
     if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery])
     }else{
      getSearchQuery()
     }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchQuery = async () => {
    try {
      const res = await fetch(
        YOUTUBE_SEARCH_API + encodeURIComponent(searchQuery)
      );

      const json = await res.json();

      dispatch(
        cacheResults({
          [searchQuery] : json[1],
        })
      
      )

      setSuggestions(json[1]);
    } catch (err) {
      console.error("ERROR:", err);
    }
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-lg items-center">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-5 col-span-1">
        <img
          alt="menu-icon"
          onClick={handleToggleMenu}
          className="w-8 h-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
        />

        <img
          alt="youtube-logo"
          className="w-28"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        />
      </div>

      {/* SEARCH SECTION */}
      <div className="flex justify-center col-span-10">

        <div className="relative w-1/2">

          {/* INPUT + BUTTON */}
          <div className="flex">

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus ={()=>setShowSuggestion(true)}
              onBlur = {()=>setShowSuggestion(false)}
              placeholder="Search"
              className="w-full h-10 px-5 border border-gray-400 rounded-l-full outline-none shadow-sm"
            />

            <button className="w-16 border border-gray-400 rounded-r-full bg-gray-100 hover:bg-gray-200">
              🔍
            </button>

          </div>

          {/* SUGGESTIONS */}
          
          {showSuggestion && suggestions.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-50">

              {suggestions.map((suggestion) => (
               <div
                  key={suggestion}
                  className="px-5 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  🔍 {suggestion}
                </div>
              
              ))}

            </div>

          )}

        </div>

      </div>

      {/* USER ICON */}
      <div className="flex justify-center col-span-1">
        <img
          alt="user-icon"
          className="w-10 h-10 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        />
      </div>

    </div>
  );
};

export default Head;