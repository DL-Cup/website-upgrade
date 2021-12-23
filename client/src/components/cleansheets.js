import { useState, useEffect } from "react";
import { getTable } from "./services/services";

import { ReactComponent as WallIcon } from "./images/wall.svg";

function MostCleansheets() {
  const [TableInfo, setTableInfo] = useState();

  useEffect(() => {
    getTable().then((res) => setTableInfo(res));
  }, []);

  return (
    <div className="most_cleansheets">
      <div className="header--mc header">
        <h2>
          Most
          <br />
          Cleansheets
        </h2>
        <WallIcon className="header__icon header--mc__icon" />
      </div>
      <div className="standings--mc standings">
        {TableInfo?.sort((a, b) => b.cleansheets - a.cleansheets).map(
          ({ teamName, cleansheets }, index) => {
            return cleansheets ? (
              <div>
                <span>{index + 1}</span>
                <span>{teamName}</span>
                <span>{cleansheets}</span>
              </div>
            ) : null;
          }
        )}
      </div>
    </div>
  );
}

export default MostCleansheets;
