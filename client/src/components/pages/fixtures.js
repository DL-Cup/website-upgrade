import axios from "axios";
import { useState, useEffect } from "react";

import { getTable } from "../services/services";
import { ReactComponent as Next } from "./../images/next.svg";
import { ReactComponent as Prev } from "./../images/prev.svg";

import "../css/fixtures.css";

const DisplayFixtures = () => {
  const [gameweekID, setGameweekID] = useState(1);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://localhost:5000/fixtures/${gameweekID}`
        );
        setFixtures(res.data);

        return;
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [gameweekID]);

  let matchSchedules = {};

  const selectComponenet = document.querySelector("select");

  return (
    <>
      <div className="fixture-options">
        <Prev
          onClick={() => {
            if (gameweekID > 1) {
              setGameweekID(gameweekID - 1);
              selectComponenet.value = gameweekID - 1;
            }
          }}
        />
        <select
          onChange={(e) => {
            setGameweekID(e.target.value);
          }}
        >
          {
            /* create list dynamically */
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
              setGameweekID(gameweekID + 1);
              selectComponenet.value = gameweekID + 1;
            }
          }}
        />
        {/* <button>Playoffs</button> */}
      </div>
      {/* <div className="flex-container"> */}
      <div className="fixtures">
        {fixtures.map((match) => {
          let date = new Date(match.schedule);

          if (matchSchedules[date.toDateString()] === 0) {
            matchSchedules[date.toDateString()]++;
          } else {
            matchSchedules[date.toDateString()] = 0;
          }

          return (
            <>
              {!matchSchedules[date.toDateString()] && (
                <h3>{date.toDateString()}</h3>
              )}
              <Details key={match.matchID} match={match} />
            </>
          );
        })}
      </div>
      {/* <div className="table-container">
        <MiniTable />
      </div> */}
      {/* </div> */}
    </>
  );
};

function Matches({ match }) {
  let [team1, team2] = match.teams;
  let [score1, score2] = match.score.split("-");

  return (
    <div className="fixture">
      <div className="scoreline">
        <span>{team1}</span>
        <strong>{score1}</strong>
      </div>
      <div className="decoration"></div>
      <div className="scoreline">
        <strong>{score2}</strong>
        <span>{team2}</span>
      </div>
      {/* <div className="schedule">{new Date(schedule).toString()}</div> */}
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
        {/* Splice method will mutate the array so we'll be left with
                 the second group of scorers on the .right side */}
        <ul>
          {match.scorers.splice(0, score1).map((scorer, index) => {
            if (leftScorers.includes(scorer)) return null;
            leftScorers.push(scorer);

            return (
              <li key={index}>
                {/* {[...new Array(numberOfGoals[scorer])].map((goal) => {
                  return <Ball />;
                })} */}
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
          {match.scorers.map((scorer, index) => {
            if (rightScorers.includes(scorer)) return null;
            rightScorers.push(scorer);

            return (
              <li key={index}>
                {scorer}{" "}
                {numberOfGoals[scorer] > 1 && "x " + numberOfGoals[scorer]}
                {/* {[...new Array(numberOfGoals[scorer])].map((goal) => {
                  return <Ball />;
                })} */}
              </li>
            );
          })}
        </ul>
      </div>
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

    return;
  });

  return (
    <details>
      <summary>
        <Matches match={match} />
      </summary>
      <Scorers match={match} />
    </details>
  );
}

function MiniTable() {
  const [TableInfo, setTableInfo] = useState();

  useEffect(() => {
    getTable().then((res) => setTableInfo(res));
  }, []);

  return (
    <table>
      <thead>
        <th>#</th>
        <th>Team</th>
        <th>MP</th>
        <th>GD</th>
        <th>Pts</th>
      </thead>
      <tbody>
        {TableInfo?.map(
          ({ teamName, played, goalDifference: GD, points }, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{teamName}</td>
                <td>{played}</td>
                <td>{GD}</td>
                <td>{points}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}

export default DisplayFixtures;
