import axios from "../services/axios";
import { useState, useEffect, useRef } from "react";

export default function Schedule() {
  const [preview, setPreview] = useState([
    "Schedule",
    "Team 1",
    "Team 2",
    "Time",
  ]);

  const timeValue = useRef(null);

  const addFixture = function (e) {
    e.preventDefault();

    axios
      .post("/addfixture", {
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

  useEffect(() => {
    let today = new Date().toISOString().slice(0, 10);

    // Max seven days after today
    // let getMax = function () {
    //   let temp = today.split("-");
    //   temp[2] = +temp[2] + 7;

    //   return temp.join("-");
    // };

    timeValue.current.min = today;
    // timeValue.current.max = getMax();
  }, []);

  return (
    <form onSubmit={addFixture} method="post">
      <div className="form-group">
        <h3>Select teams</h3>
        <select
          name="team1"
          id=""
          defaultValue=""
          onChange={(e) => {
            preview.splice(1, 1, e.target.value);
            setPreview([...preview]);
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
        >
          <option value="" disabled hidden>
            --Select team 2--
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
      </div>

      <div className="form-group">
        <h3>Set schedule</h3>
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

        <select name="GWID" id="">
          <option value="1">Gameweek 1</option>
          <option value="2">Gameweek 2</option>
          <option value="3">Gameweek 3</option>
          <option value="4">Gameweek 4</option>
          <option value="5">Gameweek 5</option>
          <option value="6">Gameweek 6</option>
          <option value="7">Gameweek 7</option>
          <option value="8">Gameweek 8</option>
          <option value="9">Gameweek 9</option>
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
          <p className="schedule">{preview[0]}</p>
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
