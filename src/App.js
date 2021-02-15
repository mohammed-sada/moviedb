import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import LikedMovies from "./pages/LikedMovies";
import Movie from "./pages/SingleMovie";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies/:id">
          <Movie />
        </Route>
        <Route path="/liked-movies">
          <LikedMovies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
