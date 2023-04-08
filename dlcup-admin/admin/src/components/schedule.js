import axios from "../services/axios";
import axiosClient from "../services/axios-client";

import { useState, useEffect, useRef } from "react";

export default function Schedule() {
  const [preview, setPreview] = useState([
    "Schedule",
    "Team 1",
    "Team 2",
    "Time",
    "GW",
  ]);

  const [TeamResults, setTeamResults] = useState([]);
  const [TableInfo, setTableInfo] = useState();
  const [selectedTeam, setSelectedTeam] = useState("");

  const initialRender = useRef(true);
  const timeValue = useRef(null);

  let TeamsPlayed = [];

  TeamResults?.forEach(({ state, teams }) => {
    if (state === "FT") {
      let [team1, team2] = teams;
      team1 === selectedTeam
        ? TeamsPlayed.push(team2)
        : TeamsPlayed.push(team1);
    }
  });

  useEffect(() => {
    let today = new Date().toISOString().slice(0, 10);

    timeValue.current.min = today;
  }, []);

  useEffect(() => {
    axiosClient.get("table").then((res) => setTableInfo(res.data));
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      axiosClient
        .get(`fixtures/team/${selectedTeam}`)
        .then((res) => setTeamResults(res.data));
    }
  }, [selectedTeam]);

  const addFixture = function (e) {
    e.preventDefault();

    axios
      .post("/api/addfixture", {
        GWID: e.target.GWID.value,
        teams: [e.target.team1.value, e.target.team2.value],
        schedule: new Date(
          Date.parse(`${e.target.date.value}T${e.target.time.value}`)
        ),
      })
      .then((res) => {
        alert(res.data);
      });
  };

  return (
    <form onSubmit={addFixture} method="post">
      <div className="form-group">
        <h3>Teams</h3>
        <select
          name="team1"
          id=""
          defaultValue=""
          // value={selectedTeam}
          onChange={(e) => {
            preview.splice(1, 1, e.target.value);
            setPreview([...preview]);

            setSelectedTeam(e.target.value);
          }}
        >
          <option value="" disabled hidden>
            --Select team 1--
          </option>
          <option value="IT">IT</option>
          <option value="Chemical">Chemical</option>
          <option value="Electrical C">Electrical C</option>
          <option value="Biomed">Biomed</option>
          <option value="Software">Software</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
          <option value="Electrical B1">Electrical B1</option>
          <option value="Electrical B2">Electrical B2</option>
          <option value="Electrical A">Electrical A</option>
        </select>
        <select
          name="team2"
          id=""
          defaultValue=""
          onChange={(e) => {
            preview.splice(2, 1, e.target.value);
            setPreview([...preview]);
          }}
          disabled={selectedTeam ? false : true}
        >
          <option value="" disabled hidden>
            --Select team 2--
          </option>
          {TableInfo?.map(({ teamName }) => {
            if (TeamsPlayed.includes(teamName) || teamName === selectedTeam) {
              return null;
            } else {
              return (
                <option key={teamName} value={teamName}>
                  {teamName}
                </option>
              );
            }
          })}
        </select>
      </div>

      <div className="form-group">
        <h3>Schedule</h3>
        <div className="date-time">
          <input
            ref={timeValue}
            type="date"
            name="date"
            id=""
            onChange={(e) => {
              preview.splice(0, 1, new Date(e.target.value).toDateString());
              setPreview([...preview]);
            }}
            required
          />
          <input
            type="time"
            name="time"
            id=""
            min="9:00"
            max="19:00"
            onChange={(e) => {
              preview.splice(3, 1, e.target.value);
              setPreview([...preview]);
            }}
            required
          />
        </div>

        <select
          name="GWID"
          id=""
          onChange={(e) => {
            preview.splice(4, 1, e.target.value);
            setPreview([...preview]);
          }}
        >
          {[...new Array(9)].map((item, index) => {
            return (
              <option key={"GW" + index} value={index + 1}>
                Gameweek {index + 1}
              </option>
            );
          })}
        </select>
      </div>

      <div className="preview">
        <h3>Preview</h3>
        <div className="box">
          {/* <div className="switch">
            <select name="" id="">
              <option value="">Gameweek 1</option>
            </select>
          </div> */}
          <p className="schedule">
            Gameweek <span className="__highlight">{preview[4]}</span>,{" "}
            {preview[0]}
          </p>
          <div className="scoreline">
            <div className="team1">{preview[1]}</div>
            <p className="time">{preview[3]}</p>
            <div className="team2">{preview[2]}</div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <input type="submit" value="Add fixture" />
      </div>
    </form>
  );
}
