import { useState, useRef } from "react";

import { ReactComponent as HelpIcon } from "./assets/help-icon.svg";
import ConfirmationModal from "./confirmationModal";

export default function MatchCenter() {
  const [selectedGW, setSelectedGW] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const tooltip = useRef(null);

  return (
    <>
      <form action="">
        <div className="form-group">
          <select
            name="CGWID"
            id="CGWID"
            value={selectedGW}
            defaultValue=""
            onChange={(e) => {
              setSelectedGW(e.target.value);
            }}
          >
            <option value="" selected hidden>
              -- Select gameweek --
            </option>
            {[...new Array(9)].map((item, index) => {
              return <option value={index + 1}>Gameweek {index + 1}</option>;
            })}
          </select>
          <div className="__current-gw">
            <span id="set-active-tooltip" ref={tooltip}>
              Set current active gameweek
            </span>
            <HelpIcon
              onClick={() => {
                tooltip.current.style.visibility = "visible";

                setTimeout(() => {
                  tooltip.current.style.visibility = "hidden";
                }, 3000);
              }}
            />
            <button
              id="set-active"
              onClick={(e) => {
                e.preventDefault();
                if (selectedGW) setShowModal(true);
              }}
            >
              Active GW
            </button>
          </div>
        </div>
      </form>
      {showModal && (
        <ConfirmationModal
          messageStart={"Do you want to set"}
          messageEnd={" as the active Gameweek?"}
          highlight={"Gameweek " + selectedGW}
          cancelFunc={() => setShowModal(false)}
        />
      )}
    </>
  );
}
