import { useState, useEffect } from "react";
import { getFixturesByGameWeek } from "../services/services";

import { ReactComponent as Next } from "./images/next.svg";
import { ReactComponent as Prev } from "./images/prev.svg";

import EmptyState from "./emptyState";
import Loader from "./loader";

function FixturesByGameweek() {
  const [gameweekID, setGameweekID] = useState(
    localStorage.getItem("GWID") ?? 1
  );
  const [fixtures, setFixtures] = useState([]);
  const [nullGameweek, setNullGameweek] = useState(false);

  useEffect(() => {
    getFixturesByGameWeek(gameweekID).then((res) => {
      setFixtures(res);

      localStorage.setItem("GWID", gameweekID);

      !res?.length ? setNullGameweek(true) : setNullGameweek(false);
    });
  }, [gameweekID]);

  let matchSchedules = {};

  return (
    <>
      <div className="fixture-options">
        <Prev
          style={
            +gameweekID === 1
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          onClick={() => {
            if (gameweekID > 1) {
              setFixtures([]);
              setGameweekID(gameweekID - 1);
            }
          }}
        />
        <select
          value={gameweekID}
          onChange={(e) => {
            setFixtures([]);
            setGameweekID(e.target.value);
          }}
        >
          {
            /* todo: create list dynamically */
            [...Array(9)].map((item, index) => {
              return (
                <option key={index + 1} value={index + 1}>
                  Gameweek {index + 1}
                </option>
              );
            })
          }
        </select>
        <Next
          style={
            +gameweekID === 9
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          onClick={() => {
            if (gameweekID < 9) {
              setFixtures([]);
              setGameweekID(+gameweekID + 1);
            }
          }}
        />
      </div>
      <div className="fixtures">
        {fixtures
          ?.sort((a, b) => Date.parse(a.schedule) - Date.parse(b.schedule))
          .map((match) => {
            let date = new Date(match.schedule);

            if (matchSchedules[date.toDateString()] === 0) {
              matchSchedules[date.toDateString()]++;
            } else {
              matchSchedules[date.toDateString()] = 0;
            }

            return (
              <div key={match.matchID}>
                {!matchSchedules[date.toDateString()] && (
                  <div className="schedule-info">
                    <h4>{date.toDateString()}</h4>
                    {match.state === "postponed" && (
                      <p className="__postponed">Postponed</p>
                    )}
                  </div>
                )}
                {match.state === "FT" ? (
                  <Details key={"FT" + match.matchID} match={match} />
                ) : (
                  <Scheduled match={match} key={"SC" + match.matchID} />
                )}
              </div>
            );
          })}
      </div>
      {!fixtures.length && !nullGameweek && <Loader />}
      {nullGameweek && (
        <EmptyState message="No gameweek information to display at this time." />
      )}
    </>
  );
}

function Results({ match }) {
  let [team1, team2] = match.teams;
  let [score1, score2] = match.score.split("-");

  return (
    <div className="fixture" key={match.matchID + match.GWID}>
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
  );
}

function Scorers({ match }) {
  let [score1] = match.score.split("-");

  // Mapping scorer to number of goals
  // Error: Check for duplicate names
  let numberOfGoals = {};
  match.scorers.forEach((scorer) => {
    if (numberOfGoals[scorer]) {
      numberOfGoals[scorer]++;
      return;
    }

    numberOfGoals[scorer] = 1;
  });

  let rightScorers = [];
  let leftScorers = [];

  return (
    <div className="fixture-info">
      <div className="left">
        <ul>
          {[...match.scorers].slice(0, score1).map((scorer, index) => {
            if (leftScorers.includes(scorer)) return null;
            leftScorers.push(scorer);

            return (
              <li key={index}>
                {scorer}{" "}
                {numberOfGoals[scorer] > 1 && "x " + numberOfGoals[scorer]}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="decoration"></div>
      <div className="right">
        <ul>
          {[...match.scorers].slice(score1).map((scorer, index) => {
            if (rightScorers.includes(scorer)) return null;
            rightScorers.push(scorer);

            return (
              <li key={index}>
                {scorer}{" "}
                {numberOfGoals[scorer] > 1 && "x " + numberOfGoals[scorer]}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Scheduled({ match }) {
  let [team1, team2] = match.teams;
  let time = new Date(Date.parse(match.schedule)).toLocaleTimeString([], {
    hour12: false,
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="fixture fixture--scheduled">
      <span>{team1}</span>
      <span className="time">{time}</span>
      <span>{team2}</span>
    </div>
  );
}

function Details({ match }) {
  useEffect(() => {
    let detailElems = document.querySelectorAll("details");

    detailElems.forEach((elem) => {
      elem.addEventListener("toggle", handleClick);
    });

    function handleClick(e) {
      if (e.target.open) {
        detailElems.forEach((elem) => {
          if (elem !== e.target) elem.open = false;
        });
      }
    }
  });

  return (
    <details>
      <summary>
        <Results match={match} />
      </summary>
      <Scorers match={match} />
    </details>
  );
}

export default FixturesByGameweek;
