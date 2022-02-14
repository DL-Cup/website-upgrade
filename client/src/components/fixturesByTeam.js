import { useState, useEffect } from "react";
import { getFixtures, getTable } from "../services/services";

import Loader from "./loader";

function TeamFixturesAndResults() {
  // make leading team selected team by default
  const [TeamResults, setTeamResults] = useState();
  const [TableInfo, setTableInfo] = useState();
  const [selectedTeam, setSelectedTeam] = useState("IT");

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
      {TableInfo?.length && TeamResults?.length && (
        <>
          <div className="select-team">
            <select
              className="team-switch"
              value={selectedTeam}
              onChange={(e) => {
                setTeamResults([]);
                setSelectedTeam(e.target.value);
              }}
            >
              {
                /* create list dynamically */
                TableInfo?.map(({ teamName }, index) => {
                  return (
                    <option key={index + 1} value={teamName}>
                      {teamName}
                    </option>
                  );
                })
              }
            </select>
            <div className="select-decoration">
              <span>▲</span>
              <span>▼</span>
            </div>
          </div>
          <div>
            <h3>Results</h3>
            {TeamResults?.map(({ state, teams, score, matchID, schedule }) => {
              if (state !== "FT") return "";

              let [team1, team2] = teams;
              let [score1, score2] = score.split("-");

              let matchOutcome;

              if (team1 === selectedTeam) {
                if (score1 > score2) {
                  matchOutcome = "W";
                } else if (score1 < score2) {
                  matchOutcome = "L";
                } else {
                  matchOutcome = "D";
                }
              } else {
                if (score2 > score1) {
                  matchOutcome = "W";
                } else if (score2 < score1) {
                  matchOutcome = "L";
                } else {
                  matchOutcome = "D";
                }

                // To display the result of selected team on the left side
                [score1, score2] = [score2, score1];
              }

              return (
                <div className="fixture-summary" key={matchID}>
                  <span className={"result-decoration " + matchOutcome}></span>
                  <span className="__score">{score1 + " - " + score2}</span>
                  <div>
                    <span className="__date">
                      {new Date(schedule)
                        .toDateString()
                        .split(" ")
                        .slice(1)
                        .join(" ")}
                    </span>
                    <span>{team1 !== selectedTeam ? team1 : team2}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="remaining-fixtures standings">
            <h3>Remaining fixtures</h3>
            <p>*Numbers represent league positions</p>

            {Object.keys(leaguePositions)?.map((team) => {
              if (TeamsPlayed.includes(team) || team === selectedTeam) {
                return null;
              } else
                return (
                  <>
                    <div>
                      <span>{team}</span>
                      <span>{leaguePositions[team]}</span>
                    </div>
                  </>
                );
            })}
          </div>
        </>
      )}
      {(!TableInfo?.length || !TeamResults?.length) && <Loader />}
    </>
  );
}

export default TeamFixturesAndResults;
