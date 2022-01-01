import { useState, useEffect } from "react";
import { getFixtures, getTable } from "./services/services";

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
          <select
            className="team-switch"
            value={selectedTeam}
            onChange={(e) => {
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
          <div className="">
            <h3>Recent results</h3>
            {TeamResults?.slice(0, 5).map(({ teams, score, matchID }) => {
              let [team1, team2] = teams;
              let [score1, score2] = score.split("-");

              return (
                <details>
                  <summary>
                    <div className="fixture" key={matchID}>
                      <div className="scoreline">
                        <span>{team1}</span>
                        <strong>{score1}</strong>
                      </div>
                      <div className="decoration"></div>
                      <div className="scoreline">
                        <strong>{score2}</strong>
                        <span>{team2}</span>
                      </div>
                    </div>
                  </summary>
                </details>
              );
            })}
          </div>
          <div className="remaining-fixtures standings">
            <h3>Remaining fixtures</h3>

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
      {!TableInfo?.length && !TeamResults?.length && <Loader />}
    </>
  );
}

export default TeamFixturesAndResults;
