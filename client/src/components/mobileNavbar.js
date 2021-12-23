import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./css/mobile-navbar.css";

import { ReactComponent as TableIcon } from "./images/Table.svg";
import { ReactComponent as FixturesIcon } from "./images/Fixtures.svg";
import { ReactComponent as StatsIcon } from "./images/Stats.svg";
import { ReactComponent as AboutIcon } from "./images/About.svg";

function MobileNavbar() {
  useEffect(() => {
    const navItems = document.querySelectorAll("nav a");

    navItems.forEach((item) => item.addEventListener("click", handleClick));

    function handleClick(e) {
      navItems.forEach((item) => item.classList.remove("active"));
      e.currentTarget.classList.add("active");
    }
  }, []);

  return (
    <nav className="mobile__navbar">
      <Link className="active nav__table" to="/">
        <TableIcon />
        <span>Table</span>
      </Link>
      <Link className="nav__fixtures" to="/fixtures">
        <FixturesIcon />
        <span>Fixtures</span>
      </Link>
      <Link className="nav__stats" to="/stats">
        <StatsIcon />
        <span>Stats</span>
      </Link>
      <Link className="nav__about" to="/about">
        <AboutIcon />
        <span>About</span>
      </Link>
    </nav>
  );
}

export default MobileNavbar;
