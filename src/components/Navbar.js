import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <ul className="navbar">
      <Link className={`${pathname === "/" && "active"}`} to="/">
        <li>Movies</li>
      </Link>

      <Link
        className={`${pathname === "/liked-movies" && "active"}`}
        to="/liked-movies"
      >
        <li>Liked Movies</li>
      </Link>
    </ul>
  );
};

export default Navbar;
