import React, { useState, useEffect } from "react";
import { getTable } from "./services/services";

import "./css/table.css";

function Table() {
  const [TableInfo, setTableInfo] = useState([]);

  useEffect(() => {
    getTable().then((res) => setTableInfo(res));
  }, []);

  useEffect(() => {
    let tableRows = document.querySelectorAll(".table-container tbody tr");

    tableRows.forEach((row) => {
      row.addEventListener("click", handleRowClick);
    });

    function handleRowClick(e) {
      if (e.currentTarget.classList.contains("outline")) {
        return;
      }

      tableRows.forEach((item) => item.classList.remove("outline"));
      e.currentTarget.classList.add("outline");

      return;
    }
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th title="Matches Played">MP</th>
            <th title="Points">Pts</th>
            <th title="Wins">W</th>
            <th title="Draws">D</th>
            <th title="Losses">L</th>
            <th>Goals</th>
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
              <tr key={teamName} className={index === 0 ? "outline" : ""}>
                <td>{index + 1}</td>
                <td>{teamName}</td>
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
  );
}

export default Table;
