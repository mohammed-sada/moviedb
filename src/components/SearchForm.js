import React from "react";
import { useGlobalContext } from "../context";
const SearchForm = () => {
  const { searchTerm, setSearchTerm, error } = useGlobalContext();

  return (
    <div className="movie-form">
      <h4>search your movie</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {error.show && <div className="error">{error.msg}</div>}
      </form>
    </div>
  );
};

export default SearchForm;
