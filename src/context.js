import React, { useState, useContext } from "react";
import useFetch from "./useFetch";

// import useFetch
// make sure to use https
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
      return (list = JSON.parse(localStorage.getItem("list")));
    } else {
      return [];
    }
  };
  const [searchTerm, setSearchTerm] = useState("avengers");
  const { isLoading, movies, setMovies, error } = useFetch(`&s=${searchTerm}`);
  const [likedMovies, setLikedMovies] = useState(getLocalStorage);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        isLoading,
        movies,
        setMovies,
        error,
        likedMovies,
        setLikedMovies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
