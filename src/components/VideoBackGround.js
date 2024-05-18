import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
    useMovieTrailer(movieId);

  return (
    <div>
    <iframe className="w-screen aspect-video"
      src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
    </div>
  );
};

export default VideoBackGround;
