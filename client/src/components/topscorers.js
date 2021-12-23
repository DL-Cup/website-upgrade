import { useState, useEffect } from "react";
import { getPlayers } from "./services/services";

import { ReactComponent as StrikerIcon } from "./images/striker.svg";

function TopScorers() {
  const [TopScorers, setTopScorers] = useState();

  useEffect(() => {
    getPlayers().then((res) => setTopScorers(res));
  }, []);

  return (
    <div className="top_scorer">
      <div className="header">
        <h2>
          TOP
          <br /> SCORERS
        </h2>
        <StrikerIcon className="header__icon" />
      </div>
      <div className="standings">
        {TopScorers?.map(
          ({ name, position, goals, nickname = "", teamName }, index) => {
            return (
              <div key={index}>
                <span>{index + 1}</span>
                <span>{nickname || name}</span>
                <span>{teamName}</span>
                <span>{position}</span>
                <span>{goals}</span>
              </div>
            );
          }
        ).slice(0, 5)}
      </div>
    </div>
  );
}

export default TopScorers;
