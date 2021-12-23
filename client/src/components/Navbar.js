import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./css/navbar.css";

function Navbar() {
  useEffect(() => {
    const options = document.querySelectorAll("nav div");

    options.forEach((item) => {
      item.addEventListener("click", handleClick);
    });

    function handleClick(e) {
      if (e.currentTarget.classList.contains("selected")) {
        return;
      }

      options.forEach((item) => item.classList.remove("selected"));
      e.currentTarget.classList.add("selected");

      return;
    }
  }, []);

  return (
    <>
      <nav className="desktop__navbar">
        <div className="selected">
          <Link to="/">Table</Link>
        </div>
        <div>
          <Link to="/fixtures">Fixtures</Link>
        </div>
        <div>
          <Link to="/Stats">Stats</Link>
        </div>
        <div>
          <Link to="/About">About</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
