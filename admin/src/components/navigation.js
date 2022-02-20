import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/api/scores"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Scores
      </NavLink>
      <NavLink
        to="/api/schedule"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Schedule
      </NavLink>
    </nav>
  );
}
