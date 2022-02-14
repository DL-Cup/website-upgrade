import Tables from "./pages/tables";
import Fixtures from "./pages/fixtures";
import MobileStats from "./pages/mobileStats";
import AllScorers from "./components/allScorers";

// import Navbar from "./components/Navbar";
import MobileNavbar from "./components/mobileNavbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./components/css/main.css";
import "./components/css/design_system.css";

import { ReactComponent as WorkingOnIt } from "./components/images/working.svg";

function App() {
  return (
    <>
      <div className="empty__state__overlay">
        <WorkingOnIt />
        <p>
          Working on the desktop site at the moment. Should be ready in a few
          weeks. Mobile site works tho...in portrait mode.
        </p>
      </div>
      <Router>
        {/* <Navbar /> */}
        <MobileNavbar />
        <main>
          <img
            src="https://i.ibb.co/HpXJt0v/logo-dl.png"
            className="logo"
            alt=""
          />
          <Switch>
            <Route path="/" exact component={Tables} />
            <Route path="/fixtures" exact component={Fixtures} />
            <Route path="/stats" exact component={MobileStats} />
            <Route path="/stats/scorers" exact component={AllScorers} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
