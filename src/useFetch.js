import { useEffect, useState } from "react";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=3ca158ed`;

const useFetch = (urlParam) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });

  async function fetchMovie(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result.Response === "True") {
        if (result.Search) {
          const newMovies = result.Search.map((movie) => {
            return { ...movie, Liked: false };
          });
          setMovies(newMovies);
        } else setMovies(result);

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: result.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovie(API_ENDPOINT + urlParam);
  }, [urlParam]);

  return { isLoading, movies, setMovies, error };
};

export default useFetch;
