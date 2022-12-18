import React from "react";
import { NavLink } from "react-router-dom";

import "./css/mobile-navbar.css";

import { ReactComponent as TableIcon } from "./images/table.svg";
import { ReactComponent as FixturesIcon } from "./images/fixtures.svg";
import { ReactComponent as StatsIcon } from "./images/stats.svg";
import { ReactComponent as AboutIcon } from "./images/about.svg";

function MobileNavbar() {
  return (
    <nav className="mobile__navbar">
      <NavLink
        className={(isActive) => "nav__table" + (isActive ? " active" : "")}
        exact
        to="/"
      >
        <TableIcon />
        <span>Table</span>
      </NavLink>
      <NavLink
        className={(isActive) => "nav__fixtures" + (isActive ? " active" : "")}
        exact
        to="/fixtures"
      >
        <FixturesIcon />
        <span>Fixtures</span>
      </NavLink>
      <NavLink
        className={(isActive) => "nav__stats" + (isActive ? " active" : "")}
        exact
        to="/stats"
      >
        <StatsIcon />
        <span>Stats</span>
      </NavLink>
      <NavLink
        className={(isActive) => "nav__about" + (isActive ? " active" : "")}
        exact
        to="/about"
      >
        <AboutIcon />
        <span>About</span>
      </NavLink>
    </nav>
  );
}

export default MobileNavbar;
