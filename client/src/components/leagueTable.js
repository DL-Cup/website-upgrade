import React, { useState, useEffect } from "react";

import { getTable } from "../services/services";

import Loader from "./loader";

import "./css/table.css";

function Table() {
  const [TableInfo, setTableInfo] = useState([]);

  useEffect(() => {
    getTable().then((res) => setTableInfo(res));
  }, []);

  return (
    <>
      {!TableInfo?.length && <Loader />}
      {TableInfo?.length && (
        <>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>
                    <div className="team__info">
                      <span>#</span>
                      <span>Team</span>
                    </div>
                  </th>
                  <th title="Matches Played">MP</th>
                  <th title="Points">Pts</th>
                  <th title="Wins">W</th>
                  <th title="Draws">D</th>
                  <th title="Losses">L</th>
                  <th>GF : GA</th>
                  <th title="Goal Difference">GD</th>
                  <th>Last 5</th>
                </tr>
              </thead>
              <tbody>
                {TableInfo.map(
                  (
                    {
                      teamName,
                      played,
                      points,
                      wins,
                      draws,
                      losses,
                      goalsFor,
                      goalsAgainst,
                      goalDifference,
                      lastFive,
                    },
                    index
                  ) => (
                    <tr
                      key={teamName}
                      id={teamName}
                      className={index === 0 ? "outline" : ""}
                    >
                      <td>
                        <div className="team__info">
                          <span>{index + 1}</span>
                          <span>{teamName}</span>
                        </div>
                      </td>
                      <td>{played}</td>
                      <td>{points}</td>
                      <td>{wins}</td>
                      <td>{draws}</td>
                      <td>{losses}</td>
                      <td>
                        {goalsFor} : {goalsAgainst}
                      </td>
                      <td>{goalDifference}</td>
                      <td>
                        <div className="span-flex">
                          {index === 0 ? (
                            <div className="tooltip">Most recent</div>
                          ) : (
                            ""
                          )}
                          {[...lastFive].map((result, index) => {
                            return <span key={index} className={result}></span>;
                          })}
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
          <div className="table-information">
            <div>
              <span id="table-first"></span>
              <p>Straight to the final</p>
            </div>
            <div>
              <span id="table-qualify"></span>
              <p>Qualified for playoffs</p>
            </div>
            <p></p>
          </div>
        </>
      )}
    </>
  );
}

export default Table;
