import React from "react";
import { useState, useRef } from "react";

import { ReactComponent as Scorers } from "./images/scorers.svg";

import EmptyState from "./emptyState";

function AllScorers({ TopScorers, cancelFunc }) {
  const [scorers, setScorers] = useState(TopScorers);

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

  return (
    <>
      <div className="all_scorers">
        <div className="header header--all">
          <button
            onClick={() => {
              cancelFunc();
            }}
            className="return"
          >
            x
          </button>
          <h2>
            ALL
            <br /> SCORERS
          </h2>
          <Scorers />
        </div>
        <div className="filter-options">
          <select
            name="team"
            id="filterbyteam"
            defaultValue=""
            ref={filterByTeam}
            onChange={(e) => {
              setScorers(
                TopScorers?.filter(
                  ({ teamName }) => teamName === e.target.value
                )
              );
              filterByPos.current.value = "";
            }}
          >
            <option value="" disabled hidden>
              Team
            </option>
            {teams.map((team) => {
              return (
                <option key={team} value={team}>
                  {team}
                </option>
              );
            })}
          </select>
          <select
            name="pos"
            id="filterbypos"
            defaultValue=""
            ref={filterByPos}
            onChange={(e) => {
              setScorers(
                TopScorers?.filter(
                  ({ position }) => position === e.target.value
                )
              );
              filterByTeam.current.value = "";
            }}
          >
            <option value="" disabled hidden>
              Position
            </option>
            {positions.map((pos) => {
              return (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              );
            })}
          </select>
          <button
            onClick={() => {
              setScorers(TopScorers);
              filterByTeam.current.value = "";
              filterByPos.current.value = "";
            }}
          >
            Clear
          </button>
        </div>
        <>
          <div className="standings standings--all">
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
        )
      </div>
    </>
  );
}

export default AllScorers;
