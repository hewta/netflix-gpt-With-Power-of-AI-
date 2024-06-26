import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-7 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upComing}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
