export default function SetActiveGWModal({ cancelFunc }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <form>
          <div className="form-group">
            <h3>Set current active gameweek</h3>
            <select name="CGWID" id="CGWID" defaultValue="">
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
            <button className="__confirm">Confirm</button>
            <button className="__cancel" onClick={() => cancelFunc()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
