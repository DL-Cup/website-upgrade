import axios from "../services/axios";

export default function Schedule() {
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

  return (
    <form onSubmit={addFixture} method="post">
      <div className="form-group">
        <h3>Select teams</h3>
        <select name="team1" id="">
          <option value="team1">Team 1</option>
          <option value="team2">Team 2</option>
          <option value="team3">Team 3</option>
          <option value="team4">Team 4</option>
          <option value="team5">Team 5</option>
          <option value="team6">Team 6</option>
          <option value="team7">Team 7</option>
          <option value="team8">Team 8</option>
          <option value="team9">Team 9</option>
        </select>
        <select name="team2" id="">
          <option value="team1">Team 1</option>
          <option value="team2">Team 2</option>
          <option value="team3">Team 3</option>
          <option value="team4">Team 4</option>
          <option value="team5">Team 5</option>
          <option value="team6">Team 6</option>
          <option value="team7">Team 7</option>
          <option value="team8">Team 8</option>
          <option value="team9">Team 9</option>
        </select>
      </div>

      <div className="form-group">
        <h3>Set schedule</h3>
        <div className="date-time">
          <input type="date" name="date" id="" />
          <input type="time" name="time" id="" />
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

      <div className="form-group">
        <input type="submit" value="Add fixture" />
      </div>
    </form>
  );
}
