import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";

const url =
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, movies: movie, error } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading" />;
  }

  if (error.show) {
    return (
      <div className="error-page">
        <h2>{error.msg}</h2>
        <Link to="/">
          <button className="btn">back to home</button>
        </Link>
      </div>
    );
  }
  const {
    Title,
    Country,
    imdbRating,
    Plot,
    Year,
    Poster,
    Genre,
    Runtime,
  } = movie;
  return (
    <div className="section single-movie">
      <div className="header">
        <h3>
          {Title} {Year}
        </h3>
        <img src={Poster === "N/A" ? url : Poster} alt={Title} />
      </div>
      <div className="movie-info">
        <h3>
          <span>Country:</span>
          {Country}
        </h3>
        <h3>
          <span>Genre:</span>
          {Genre}
        </h3>
        <h3>
          <span>Rating:</span>
          {imdbRating}
        </h3>
        <h3>
          <span>Duration:</span>
          {Runtime}
        </h3>
        <p>
          <span className="desc">Description:</span>
          <br />
          {Plot}
        </p>
        <Link to="/">
          <button className="btn">back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleMovie;
