import React from "react";
import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { getPlayers } from "../services/services";

import Loader from "./loader";
import { ReactComponent as Scorers } from "./images/scorers.svg";

import EmptyState from "./emptyState";

function AllScorers() {
  const [scorers, setScorers] = useState();
  const [initialScorers, setInitialScoeres] = useState();

  const filterByTeam = useRef();
  const filterByPos = useRef();

  const teams = [
    "BIO",
    "CIV",
    "CHE",
    "ELA",
    "EB1",
    "EB2",
    "ELC",
    "ITE",
    "MEC",
    "SFT",
  ];
  const positions = ["GK", "DF", "MD", "ST"];

  const history = useHistory();

  useEffect(() => {
    getPlayers().then((res) => {
      setScorers(res);
      setInitialScoeres(res);
    });
  }, []);

  return (
    <>
      <div className="all_scorers">
        <div className="header header--all">
          <button
            onClick={() => {
              history.push("/stats");
            }}
            className="return"
          >
            X
          </button>
          <h2>
            All
            <br /> Scorers
          </h2>
          <Scorers />
        </div>
        <div className="filter-options">
          <select
            name="team"
            id="filterbyteam"
            ref={filterByTeam}
            onChange={(e) => {
              setScorers(
                initialScorers?.filter(
                  ({ teamName }) => teamName === e.target.value
                )
              );
              filterByPos.current.value = "";
            }}
          >
            <option value="" disabled selected hidden>
              Team
            </option>
            {teams.map((team) => {
              return <option value={team}>{team}</option>;
            })}
          </select>
          <select
            name="pos"
            id="filterbypos"
            ref={filterByPos}
            onChange={(e) => {
              setScorers(
                initialScorers?.filter(
                  ({ position }) => position === e.target.value
                )
              );
              filterByTeam.current.value = "";
            }}
          >
            <option value="" disabled selected hidden>
              Position
            </option>
            {positions.map((pos) => {
              return <option value={pos}>{pos}</option>;
            })}
          </select>
          <button
            onClick={() => {
              setScorers(initialScorers);
              filterByTeam.current.value = "";
              filterByPos.current.value = "";
            }}
          >
            Clear
          </button>
        </div>
        {/* While loading */}
        {!initialScorers?.length && <Loader />}
        {initialScorers?.length && (
          <>
            <div className="standings standings--all">
              {/* While filtering */}
              {!scorers?.length && <EmptyState message="No goals to show." />}
              {scorers?.length
                ? scorers
                    ?.filter((scorer) => scorer.goals)
                    .map(
                      (
                        { name, position, goals, nickname = "", teamName },
                        index
                      ) => {
                        return (
                          <div key={index}>
                            <span>{nickname || name}</span>
                            <span>{teamName}</span>
                            <span>{position}</span>
                            <span>{goals}</span>
                          </div>
                        );
                      }
                    )
                : ""}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AllScorers;
