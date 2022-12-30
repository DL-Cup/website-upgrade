import { useState } from "react";
import FixturesByGameweek from "../components/fixturesByGameweek";
import FixturesByTeam from "../components/fixturesByTeam";

import "../components/css/fixtures.css";

function Fixtures() {
  const [activeTab, setActiveTab] = useState("fixturesByGameweek");

  return (
    <div className="wrapper">
      <div className="toggle">
        <button
          className={`${activeTab === "fixturesByGameweek" ? "selected" : ""}`}
          onClick={() => {
            setActiveTab("fixturesByGameweek");
          }}
        >
          All
        </button>
        <button
          className={`${activeTab === "fixturesByTeam" ? "selected" : ""}`}
          onClick={() => {
            setActiveTab("fixturesByTeam");
          }}
        >
          Team
        </button>
      </div>
      {activeTab === "fixturesByGameweek" && <FixturesByGameweek />}
      {activeTab === "fixturesByTeam" && <FixturesByTeam />}
    </div>
  );
}

export default Fixtures;
