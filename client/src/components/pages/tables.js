import Table from "./../leagueTable";
// import Stats from "./../stats";

import { SelectionContext } from "../services/selectionContext";
import { useState } from "react";

export default function Tables() {
  const [selectedTeam, setSelectedTeam] = useState();

  return (
    <div className="grid-container">
      <SelectionContext.Provider value={{ selectedTeam, setSelectedTeam }}>
        <Table />
        {/* <Stats /> */}
      </SelectionContext.Provider>
    </div>
  );
}
