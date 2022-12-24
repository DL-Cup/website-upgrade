import "../components/css/about.css";

import { ReactComponent as Telegram } from "../components/images/telegram.svg";

function About() {
  return (
    <>
      <h1 id="#overview">Overview</h1>
      <p>
        Dl cup is an inter-department football league for the classes of 2022
        and 2023 at Addis Ababa institute of Technology. The league consists of
        10 teams from all 6 departments at the university.
      </p>
      <p>
        In the current league format, all teams will play 9 matches each to
        determine the teams that will progress to the knockout stages. The team
        on top at the end of the league stage will qualify straight to the
        finals while the 2nd to 5th teams will compete with each other for a
        spot at the final.
      </p>

      <h1 id="links">Links</h1>
      <ul>
        <li>
          <a href="https://t.me/ItsTheDLCup">
            <Telegram />
            Main Channel
          </a>
        </li>
        <li>
          <a href="https://t.me/ItsTheDLCup">
            <Telegram />
            Memes Channel
          </a>
        </li>
      </ul>
    </>
  );
}

export default About;
