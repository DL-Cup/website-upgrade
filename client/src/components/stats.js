import { useState, useEffect, useContext } from "react";
import { getTable, getPlayers, getFixtures } from "./services/services";
import "./css/stats.css";

import { SelectionContext } from "./services/selectionContext";

function Stats() {
  return (
    <div className="stats">
      <div className="team-info">
        <TeamFixturesAndResults />
      </div>
      <div className="league-stats">
        <TopScorer />
        <MostCleansheets />
      </div>
    </div>
  );
}

function TeamFixturesAndResults() {
  // make leading team selected team by default
  const [TeamResults, setTeamResults] = useState();
  const [TableInfo, setTableInfo] = useState();
  const { selectedTeam } = useContext(SelectionContext);

  useEffect(() => {
    getFixtures(selectedTeam).then((res) => setTeamResults(res));
  }, [selectedTeam]);

  useEffect(() => {
    getTable().then((res) => setTableInfo(res));
  }, []);

  const leaguePositions = {};

  TableInfo?.forEach(({ teamName }, index) => {
    leaguePositions[teamName] = index + 1;
  });

  let TeamsPlayed = [];

  TeamResults?.forEach(({ teams }) => {
    let [team1, team2] = teams;
    team1 === selectedTeam ? TeamsPlayed.push(team2) : TeamsPlayed.push(team1);
  });

  return (
    <>
      <div className="recent-results">
        <h4>Recent results</h4>
        <hr />
        <>
          {TeamResults?.slice(0, 5).map(({ teams, score, matchID }) => {
            let [, , team1, team2] = teams;

            return (
              <div className="match" key={matchID}>
                <span>{team1}</span>
                <span className="score">{score}</span>
                <span>{team2}</span>
              </div>
            );
          })}
        </>
      </div>
      <div className="remaining-fixtures">
        <h4>Remaining results</h4>
        <hr />
        <table>
          <colgroup>
            <col />
            <col className="leaguePos" />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th>League Position</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(leaguePositions)?.map((team) => {
              if (TeamsPlayed.includes(team) || team === selectedTeam) {
                return null;
              } else
                return (
                  <tr>
                    <td>{team}</td>
                    <td>{leaguePositions[team]}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    </>
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
