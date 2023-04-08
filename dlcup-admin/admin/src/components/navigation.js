import axios from "../services/axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import SetActiveGWModal from "./modals/setActiveGWModal";

export default function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const checkLive = setInterval(() => {
      axios.get("/api/live").then((res) => setLive(res.data));
    }, 30000);

    return () => {
      clearInterval(checkLive);
    };
  });

  return (
    <>
      <nav>
        <NavLink
          to="/api/scores"
          className={({ isActive }) =>
            `${isActive ? "selected " : ""}${live ? "gw-live" : ""}`
          }
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
