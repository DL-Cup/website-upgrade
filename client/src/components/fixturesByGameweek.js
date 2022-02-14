import axios from "../services/axios";
import { useState, useEffect } from "react";

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
    async function fetchData() {
      try {
        const res = await axios.get(`fixtures/${gameweekID}`);
        setFixtures(res.data);

        localStorage.setItem("GWID", gameweekID);

        !res.data?.length ? setNullGameweek(true) : setNullGameweek(false);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [gameweekID]);

  let matchSchedules = {};

  return (
    <>
      <div className="fixture-options">
        <Prev
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
              <>
                {!matchSchedules[date.toDateString()] && (
                  <h4>{date.toDateString()}</h4>
                )}
                {match.state === "FT" ? (
                  <Details key={match.matchID} match={match} />
                ) : (
                  <Scheduled match={match} />
                )}
              </>
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
  let time = new Date(Date.parse(match.schedule)).toLocaleTimeString("en-GB", {
    timeStyle: "short",
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
