import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <h1>THE DARK BLOGS</h1>
      </Link>

      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/Create">New Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
