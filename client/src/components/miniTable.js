import { useState, useEffect } from "React";
import { getTable } from "./services/services";

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

export default MiniTable;
