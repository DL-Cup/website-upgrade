import { useState, useEffect } from "react";
import { getTable, getPlayers } from "./services/services";
import "./css/stats.css";

import { ReactComponent as StrikerIcon } from "./images/striker.svg";

function Stats() {
  return (
    <div className="league-stats">
      <TopScorer />
      <MostCleansheets />
    </div>
  );
}

function TopScorer() {
  const [TopScorers, setTopScorers] = useState();

  useEffect(() => {
    getPlayers().then((res) => setTopScorers(res));
  }, []);

  return (
    <div className="top-scorer">
      <div>
        <h2>
          TOP
          <br /> SCORERS
        </h2>
        <StrikerIcon />
      </div>
      <div>
        {TopScorers?.map(
          ({ name, position, goals, nickname = "", teamName }, index) => {
            return (
              <div className="stats-card" key={index}>
                <span>{index + 1}</span>
                <span className="ls__player">{nickname || name}</span>
                <span className="ls__team">{teamName}</span>
                <span className="ls__position">
                  {position.toLowerCase().slice(0, 3)}
                </span>
                <span className="ls__stat ls__right">{goals}</span>
              </div>
            );
          }
        ).slice(0, 5)}
      </div>
    </div>
  );
}

function MostCleansheets() {
  const [TableInfo, setTableInfo] = useState();

  useEffect(() => {
    getTable().then((res) => setTableInfo(res));
  }, []);

  return (
    <div className="most-cleansheets">
      <h4 className="ls__heading">Most Cleansheets</h4>
      {TableInfo?.sort((a, b) => b.cleansheets - a.cleansheets).map(
        ({ teamName, cleansheets }, index) => {
          return cleansheets ? (
            <div className="stats-card">
              <span>{index + 1}</span>
              <span className="ls__team">{teamName}</span>
              <span className="ls__stat ls__right">{cleansheets}</span>
            </div>
          ) : null;
        }
      )}
    </div>
  );
}

export default Stats;
