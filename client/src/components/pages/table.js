import React, { useState, useEffect } from "react";
import axios from "../../axios";

import "../css/table.css";

export default function Table(props) {
  const [TableInfo, setTableInfo] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      const request = await axios.get("table");

      setTableInfo(request.data);
      return request;
    }
    fetchTable();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Last 5</th>
          <th id="Pts" title="Total Points">
            Points
          </th>
          <th id="Pl" title="Games Played">
            Played
          </th>
          <th id="W">Won</th>
          <th id="D">Drawn</th>
          <th id="L">Lost</th>
          <th>
            <abbr title="Goals for">GF</abbr>
          </th>
          <th>
            <abbr title="Goals against">GA</abbr>
          </th>
          <th>
            <abbr title="Goal Difference">GD</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        {TableInfo.map((i) => (
          <tr key={i.team}>
            <td id={i.team}>
              <span>{i.team}</span>
              <i className="fas fa-minus"></i>
            </td>
            <td>
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-check-circle"></i>
            </td>
            <td>{i.points}</td>
            <td>{i.played}</td>
            <td>{i.win}</td>
            <td>{i.draw}</td>
            <td>{i.loss}</td>
            <td>{i.goalForward}</td>
            <td>{i.goalAgainst}</td>
            <td>{i.goalDifference}</td>
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
