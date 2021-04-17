import React from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import { useGlobalContext } from "../context";

const LikedMovies = () => {
  const { likedMovies, setLikedMovies } = useGlobalContext();

  return likedMovies.length > 0 ? (
    <div className="section liked-movies">
      <div>
        <Link to="/">
          <button className="btn">back to hooome</button>
        </Link>
        <button
          style={{ margin: "10px" }}
          onClick={() => setLikedMovies([])}
          className="btn"
        >
          clear
        </button>
      </div>
      <div className="movies">
        {likedMovies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <div>
                <Movie key={movie.imdbID} {...movie} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="error-page">
      <h3>you didn't like any movie yet !</h3>
      <Link to="/">
        <button className="btn">back to home</button>
      </Link>
    </div>
  );
};

export default LikedMovies;
