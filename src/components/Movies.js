import React from "react";
import { useGlobalContext } from "../context";
import Movie from "./Movie";

const Movies = () => {
  const { isLoading, movies } = useGlobalContext();

  if (isLoading) {
    return <div className="loading" />;
  }

  return (
    <section className="section">
      <div className="movies">
        {movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} movie={movie} />;
        })}
      </div>
    </section>
  );
};

export default Movies;
