import React, { useState, useEffect } from "react";
import axios from "../../axios";

import "../css/stats.css";

export default function Stats(props) {

    return (
    <table className="tablestats">
  <thead className="tablehead">
    <tr>
      <th>No.</th>
      <th>First Name</th>
      <th>Last Name</th>
      {/* <th>Department</th> */}
    </tr>
  </thead>

  <tbody className="tablebody">
    <tr className="tablerow">
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr className="tablerow">
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr className="tablerow">
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>sklfdjsk</td>
    </tr>
  </tbody>
</table>);
}