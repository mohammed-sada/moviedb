import React from "react";
import Movies from "../components/Movies";
import SearchForm from "../components/SearchForm";
const Home = () => {
  return (
    <>
      <div className="home">
        <SearchForm />
        <Movies />
      </div>
    </>
  );
};

export default Home;
