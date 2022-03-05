import axiosClient from "../services/axios-client";
import { useState, useEffect, useRef } from "react";

import FullTimeModal from "./modals/fullTimeModal";

export default function MatchCenter() {
  const [fixtures, setFixtures] = useState();
  const [gameweek, setGameweek] = useState();

  const [showFullTimeModal, setShowFullTimeModal] = useState(false);
  const [activeModal, setActiveModal] = useState([]);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      axiosClient
        .get(`/fixtures/${gameweek}`)
        .then((res) => setFixtures(res.data));
    }
  }, [gameweek]);

  return (
    <>
      <select
        className="match-center-select"
        name="GWID"
        id="GWID"
        defaultValue=""
        onChange={(e) => {
          setGameweek(e.target.value);
        }}
      >
        <option value="" disabled hidden>
          --Select Gameweek--
        </option>
        {[...new Array(9)].map((item, index) => {
          return (
            <option key={index} value={index + 1}>
              Gameweek {index + 1}
            </option>
          );
        })}
      </select>

      <div className="fixtures-list">
        {fixtures
          ?.sort((a, b) => new Date(b.schedule) - new Date(a.schedule))
          .map(({ teams, score, schedule, state, matchID }, index) => {
            score = score ?? "-";

            return (
              <div
                className="fixture-gw"
                key={index}
                onClick={() => {
                  if (state === "FT") {
                    setActiveModal(fixtures[index]);
                    setShowFullTimeModal(true);
                  }
                }}
              >
                <div className="__teams">
                  <p>{teams[0]}</p>
                  <p>{teams[1]}</p>
                </div>
                <div className="__score">
                  <p>{state === "FT" ? score.split("-")[0] : "-"}</p>
                  <p>{score.split("-")[1]}</p>
                </div>
                <div className="__info">
                  <p>{state}</p>
                  <p>
                    {new Date(schedule).toLocaleDateString([], {
                      weekday: "short",
                      month: "short",
                      day: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      {showFullTimeModal && (
        <FullTimeModal
          {...activeModal}
          closeFunc={() => {
            setShowFullTimeModal(false);
            setActiveModal([]);
          }}
        />
      )}
    </>
  );
}
