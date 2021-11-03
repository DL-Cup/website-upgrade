import axios from "axios";
import { useState, useEffect } from "react";
import "../../css/fixtures.css"

const DisplayFixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000/fixtures/2");
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
        return <Details match={match} />;
      })}
    </section>
  );
};

function Matches({ match }) {
  return (
    <div className="match">
      <div className="scoreline">
        <div className="team">{match.teams[0]}</div>
        <div className="score">{match.score}</div>
        <div className="team">{match.teams[1]}</div>
      </div>
      <div className="schedule">{new Date(match.schedule).toString()}</div>
    </div>
  );
}

function Scorers({ match }) {
  return (
    <div className="scorers">
      <div className="left">
        {/* Splice method will mutate the array so we'll be left with 
                 the second group of scorers on the .right side */}
        <ul>
          {match.scorers.splice(0, match.score[0]).map((scorer) => {
            return <li>{scorer}</li>;
          })}
        </ul>
      </div>
      <div className="right">
        <ul>
          {match.scorers.map((scorer) => {
            return <li>{scorer}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

function Details({ match }) {
  return (
    <details>
      <summary>
        <Matches match={match} />
      </summary>
      <Scorers match={match} />
    </details>
  );
}

export default DisplayFixtures;
