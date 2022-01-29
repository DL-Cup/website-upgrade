import { useState, useEffect } from "react";
import { getTable } from "../services/services";

import { ReactComponent as WallIcon } from "./images/wall.svg";

import Loader from "./loader";

function MostCleansheets() {
  const [TableInfo, setTableInfo] = useState();
  let cPrev,
    iPrev,
    currentIndex,
    CSstore = [];

  useEffect(() => {
    getTable().then((res) => setTableInfo(res));
  }, []);

  return (
    <>
      {!TableInfo?.length && <Loader />}
      {TableInfo?.length && (
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
                cPrev = CSstore[0];
                iPrev = CSstore[1];

                currentIndex = cPrev === cleansheets ? iPrev : index + 1;
                CSstore = [cleansheets, currentIndex];

                return cleansheets ? (
                  <div key={index}>
                    <span>{currentIndex}</span>
                    <span>{teamName}</span>
                    <span>{cleansheets}</span>
                  </div>
                ) : null;
              }
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MostCleansheets;
