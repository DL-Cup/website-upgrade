import { useState } from "react";
import { NavLink } from "react-router-dom";

import SetActiveGWModal from "./modals/setActiveGWModal";

export default function Navigation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
        <button className="set-current" onClick={() => setShowModal(true)}>
          Current GW
        </button>
      </nav>
      {showModal && <SetActiveGWModal cancelFunc={() => setShowModal(false)} />}
    </>
  );
}
