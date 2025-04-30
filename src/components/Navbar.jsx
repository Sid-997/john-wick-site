/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

function Navbar() {
  return (
    <div className="navbar-movie">
      <div>
        <Link to="/">
          <h1>John Wick</h1>
        </Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
