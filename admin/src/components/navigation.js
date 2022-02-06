import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/scores"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Scores
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Schedule
      </NavLink>
    </nav>
  );
}
