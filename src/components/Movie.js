import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const url =
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80";

const Movie = ({
  movie,
  imdbID: id,
  Title: title,
  Year: year,
  Poster: poster,
  Liked,
}) => {
  const { likedMovies, setLikedMovies, movies, setMovies } = useGlobalContext();

  const checkIfLiked = (status) => {
    const newMovies = movies.map((movie) => {
      if (movie.imdbID === id) return { ...movie, Liked: status };
      else return movie;
    });
    setMovies(newMovies);
  };

  const handleLikedmovies = (id) => {
    //check if it already exists. we don't want to save the same movie twice if the uses likes the movie more than one time

    let exist = false;
    likedMovies.map((item) => {
      if (item.imdbID === id) {
        exist = true;
      }
    });
    !exist && setLikedMovies([...likedMovies, { ...movie }]);
    checkIfLiked(true);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(likedMovies));
  }, [likedMovies]);

  const removeMovie = (id) => {
    const newMovies = likedMovies.filter((movie) => movie.imdbID !== id);
    setLikedMovies(newMovies);
    checkIfLiked(false);
  };

  return (
    <div className="movie">
      <Link to={`movies/${id}`}>
        <img width="300px" src={poster === "N/A" ? url : poster} alt={title} />
      </Link>
      <div className="info">
        <div>
          <h4>{title}</h4>
          <h5>{year}</h5>
        </div>
        {!movie ? (
          <div className="tooltip">
            <FaTrashAlt className="icon" onClick={() => removeMovie(id)} />
            <span className="tooltiptext">remove from favorite</span>
          </div>
        ) : Liked ? (
          <div className="tooltip">
            <AiFillHeart className="icon" onClick={() => removeMovie(id)} />
            <span className="tooltiptext">remove from favorite</span>
          </div>
        ) : (
          <div className="tooltip">
            <AiOutlineHeart
              className="icon"
              onClick={() => handleLikedmovies(id)}
            />
            <span className="tooltiptext">add to favorite</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
