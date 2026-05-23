import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg p-5 w-48">

      {/* 🔥 Home */}
      <ul className="mb-4">
        <li className="font-bold hover:bg-gray-200 p-2 rounded cursor-pointer">
          <Link to="/">🏠 Home</Link>
        </li>
      </ul>

      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Gaming</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Music</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Technology</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Movies</li>
      </ul>

      <h1 className="font-bold mt-4">Explore</h1>
      <ul>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Trending</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Live</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">News</li>
      </ul>

      <h1 className="font-bold mt-4">Watch Later</h1>
      <ul>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Saved Videos</li>
      </ul>

    </div>
  );
};

export default Sidebar;