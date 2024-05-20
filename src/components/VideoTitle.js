import React from "react";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pl-12 pt-[20%] px-24 absolute text-white ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className="bg-gray-500 mx-2 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg flex items-center space-x-2">
        <GoInfo /><span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
