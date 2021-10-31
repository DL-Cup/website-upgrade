import axios from "axios";
import { useState, useEffect } from "react";

const DisplayFixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/fixtures");
        setFixtures(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="fixtures">
      <div className="gameweek">
        <h1>Gameweek {fixtures.GWID}</h1>
      </div>
      {fixtures["matches"]?.map((match) => {
        return (
          <details>
            <summary>
              <div class="match">
                <div className="scoreline">
                  <div className="team">{match.teams[0]}</div>
                  <div className="score">{match.score}</div>
                  <div className="team">{match.teams[1]}</div>
                </div>
                <div className="schedule">
                  {new Date(match.schedule).toString()}
                </div>
              </div>
            </summary>
            <div className="scorers">
              <div className="left">
                {match.scorers.splice(0, match.score[0]).map((scorer) => {
                  return <p>{scorer}</p>;
                })}
              </div>
              <div className="right">
                {match.scorers.map((scorer) => {
                  return <p>{scorer}</p>;
                })}
              </div>
            </div>
          </details>
        );
      })}
    </section>
  );
};

export default DisplayFixtures;
