import TopScorers from "../components/topScorers";
import MostCleansheets from "../components/mostCleansheets";

import "../components/css/mobile-stats.css";

export default function MobileStats() {
  return (
    <div className="wrapper">
      <TopScorers></TopScorers>
      <MostCleansheets></MostCleansheets>
    </div>
  );
}
