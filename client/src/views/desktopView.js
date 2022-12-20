import LeagueTable from "../components/leagueTable";
import TopScorers from "../components/topScorers";
import MostCleansheets from "../components/mostCleansheets";
import Header from "../components/header";

function DesktopView() {
  return (
    <>
      <main className="desktop-view">
        <LeagueTable />
        <aside>
          <TopScorers />
          <MostCleansheets />
        </aside>
      </main>
    </>
  );
}

export default DesktopView;
