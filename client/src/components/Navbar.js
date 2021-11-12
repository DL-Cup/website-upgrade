import React from "react";
import { Link } from "react-router-dom";

import "./css/navbar.css";

function Navbar() {
  return (
    <>
      <button className="router-link">
        <Link to="/">Table</Link>
      </button>
      <button className="router-link">
        <Link to="/fixtures">Fixtures</Link>
      </button>
    </>
  );
}

export default Navbar;
