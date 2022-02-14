import { useState, useEffect } from "react";
import { getPlayers } from "../services/services";

import { useHistory } from "react-router-dom";

// import { ReactComponent as StrikerIcon } from "./images/striker.svg";
import { ReactComponent as StrikerIcon } from "./images/striker.svg";

import Loader from "./loader";

function TopScorers() {
  const [TopScorers, setTopScorers] = useState();
  let gPrev,
    iPrev,
    currentIndex,
    GIstore = [];

  useEffect(() => {
    getPlayers().then((res) => setTopScorers(res));
  }, []);

  const history = useHistory();

  return (
    <>
      {!TopScorers?.length && <Loader />}
      {TopScorers?.length && (
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
                // Destructuring isn't supported in mobile browsers
                //
                // [gPrev, iPrev] = GIstore;

                gPrev = GIstore[0];
                iPrev = GIstore[1];

                currentIndex = gPrev === goals ? iPrev : index + 1;
                GIstore = [goals, currentIndex];

                return (
                  <div key={index}>
                    <span>{currentIndex}</span>
                    <span>{nickname || name}</span>
                    <span>{teamName}</span>
                    <span>{position}</span>
                    <span>{goals}</span>
                  </div>
                );
              }
            ).slice(0, 5)}
          </div>
          <button
            onClick={() => {
              history.push("/stats/scorers");
            }}
          >
            More
          </button>
        </div>
      )}
    </>
  );
}

export default TopScorers;
