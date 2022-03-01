import { useState, useEffect } from "react";
import { getPlayers } from "../services/services";

import { ReactComponent as StrikerIcon } from "./images/striker.svg";

import Loader from "./loader";
import AllScorers from "./allScorersModal";

function TopScorers() {
  const [TopScorers, setTopScorers] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getPlayers().then((res) => setTopScorers(res));
  }, []);

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
                return (
                  <div key={index}>
                    {/* <span>{currentIndex}</span> */}
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
              setShowModal(true);
            }}
          >
            More
          </button>
        </div>
      )}
      {showModal && (
        <AllScorers
          TopScorers={TopScorers}
          cancelFunc={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default TopScorers;
