import { useState, useEffect } from "react";
import FixturesByGameweek from "../fixturesByGameweek";
import TeamFixturesAndResults from "../fixturesByTeam";

import "../css/fixtures.css";

function Fixtures() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const switches = document.querySelectorAll("button");

    switches.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    function handleClick(e) {
      switches.forEach((button) => {
        button.classList.remove("selected");
      });

      e.target.classList.add("selected");
    }
  }, []);

  return (
    <>
      <div className="toggle">
        <button className="selected" onClick={() => setToggle(true)}>
          All
        </button>
        <button onClick={() => setToggle(false)}>Team</button>
      </div>
      {toggle && <FixturesByGameweek />}
      {!toggle && <TeamFixturesAndResults />}
    </>
  );
}

export default Fixtures;
