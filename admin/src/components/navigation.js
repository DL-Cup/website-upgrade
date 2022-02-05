import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/match_center">Match Center</NavLink>
      <NavLink to="/schedule">Schedule</NavLink>
    </nav>
  );
}
