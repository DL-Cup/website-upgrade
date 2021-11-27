import { useState, useEffect, useContext } from "react";
import { getTable, getPlayers, getFixtures } from "./services/services";
import "./css/stats.css";

import { SelectionContext } from "./services/selectionContext";

function Stats() {
  return (
    <div className="stats">
      <div className="team-info">
        <RecentResuls />
      </div>
      <div className="league-stats">
        <TopScorer />
        <MostCleansheets />
      </div>
    </div>
  );
}

function RecentResuls() {
  // make leading team selected team by default
  const [TeamInfo, setTeamInfo] = useState();
  const { selectedTeam } = useContext(SelectionContext);

  useEffect(() => {
    getFixtures(selectedTeam).then((res) => setTeamInfo(res));
  });

  return (
    <div className="recent-results">
      <h4>Recent results</h4>
      <hr />
      <>
        {TeamInfo?.slice(0, 5).map(({ teams, score }) => {
          let [, , team1, team2] = teams;

          return (
            <div class="match">
              <span>{team1}</span>
              <span class="score">{score}</span>
              <span>{team2}</span>
            </div>
          );
        })}
      </>
    </div>
  );
}

function RemainingFixtures() {
  return (
    <div className="remaining-fixtures">
      <h4>Remaining results</h4>
      <hr />
      <>{}</>
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
      <h4 className="ls__heading">Top Goalscorers</h4>
      {TopScorers?.map(
        ({ name, position, goals, nickname = "", teamName }, index) => {
          return (
            <div className="stats-card" key={index}>
              <span>{index + 1}</span>
              <span className="ls__player">{nickname || name}</span>
              <span className="ls__team ls__right">{teamName}</span>
              <span className="ls__stat">{goals}</span>
            </div>
          );
        }
      ).slice(0, 5)}
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
