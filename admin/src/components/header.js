import { NavLink } from "react-router-dom";

export default function Header({ authOut, user }) {
  return (
    <header>
      <h1>Dlcup Admin</h1>
      {user && (
        <NavLink
          to="/"
          onClick={() => {
            authOut();
          }}
        >
          Logout
        </NavLink>
      )}
    </header>
  );
}
