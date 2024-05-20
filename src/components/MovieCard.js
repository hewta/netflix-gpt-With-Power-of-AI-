import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 overflow-visible shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-110 origin-center">
      <img alt="Movie Poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
