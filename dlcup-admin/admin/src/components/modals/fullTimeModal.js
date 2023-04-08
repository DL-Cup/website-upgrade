import useDetectOutside from "./useDetectOutside";
import { useRef } from "react";

export default function FullTimeModal({
  matchID,
  score,
  scorers,
  teams,
  closeFunc,
}) {
  const modal = useRef();
  useDetectOutside(modal, closeFunc);

  let [score1, score2] = score.split("-");

  return (
    <div className="modal-container">
      <div className="modal modal--ft" ref={modal}>
        <h3>Full-Time</h3>
        <div className="ft__scoreline">
          <div className="ft__side">
            <p>{teams[0]}</p>
            <span className="ft__score">{score1}</span>
          </div>
          <div className="ft__side">
            <span className="ft__score">{score2}</span>
            <p>{teams[1]}</p>
          </div>
        </div>
        <div className="ft__scorers">
          <div className="ft__teamone">
            {scorers.slice(0, score1).map((scorer) => {
              return <p className="ft__scorer">{scorer}</p>;
            })}
          </div>
          <div className="ft__teamtwo">
            {scorers.slice(score1).map((scorer) => {
              return <p className="ft__scorer">{scorer}</p>;
            })}
          </div>
        </div>
        <div className="modal-actions">
          <button className="__confirm __confirm--ft">Edit</button>
          <button className="__cancel" onClick={closeFunc}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
