import LeagueTable from "../components/leagueTable";
import TopScorers from "../components/topScorers";
import Fixtures from "../pages/fixtures";
import MostCleansheets from "../components/mostCleansheets";

function DesktopView() {
  return (
    <>
      {/* <Header /> */}
      <main className="desktop-view">
        <LeagueTable />
        <section>
          <Fixtures />
        </section>
        <aside>
          <TopScorers />
          <MostCleansheets />
        </aside>
      </main>
    </>
  );
}

export default DesktopView;