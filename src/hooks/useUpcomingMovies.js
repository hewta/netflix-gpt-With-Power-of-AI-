import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { upComingMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {
  //Fetch data from TNDB API and update store

  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(upComingMovies(json.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
