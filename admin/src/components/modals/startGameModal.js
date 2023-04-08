import useDetectOutside from "./useDetectOutside";
import { useRef } from "react";

export default function StartGameModal({ schedule, teams, closeFunc }) {
  const modal = useRef();
  useDetectOutside(modal, closeFunc);

  return (
    <div className="modal-container">
      <div className="modal modal--sc" ref={modal}>
        <h3>
          {new Date(schedule).toLocaleDateString([], {
            weekday: "short",
            month: "long",
            day: "2-digit",
          })}
        </h3>
        <div className="ft__scoreline">
          <div className="ft__side">
            <p>{teams[0]}</p>
          </div>
          <div className="ft__schedule">
            <p>
              {new Date(schedule).toLocaleTimeString([], {
                hour12: false,
                hourCycle: "h23",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="ft__side">
            <p>{teams[1]}</p>
          </div>
        </div>
        <div className="modal-actions">
          <button className="__confirm">Kick-off</button>
          <button className="__cancel">Re-schedule</button>
        </div>
      </div>
    </div>
  );
}
