import { useRef } from "react";
import axios from "../../services/axios";

export default function SetActiveGWModal({ cancelFunc }) {
  const selectValue = useRef();

  function setGameweek(e) {
    e.preventDefault();
    if (selectValue.current.value) {
      axios
        .post("/api/setGameweek", { GWID: +selectValue.current.value })
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("no bueno");
    }
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="form-group">
          <h3>Set current active gameweek</h3>
          <select name="CGWID" id="CGWID" defaultValue="" ref={selectValue}>
            <option value="" disabled hidden>
              -- Select gameweek --
            </option>
            {[...new Array(9)].map((item, index) => {
              return (
                <option key={index} value={index + 1}>
                  Gameweek {index + 1}
                </option>
              );
            })}
          </select>
        </div>
        <div className="modal-actions">
          <button className="__confirm" onClick={setGameweek}>
            Confirm
          </button>
          <button className="__cancel" onClick={() => cancelFunc()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
