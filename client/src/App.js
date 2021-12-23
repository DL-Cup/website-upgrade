import Tables from "./components/pages/tables";
import Fixtures from "./components/pages/fixtures";
import MobileStats from "./components/pages/mobile-stats";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/mobileNavbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./components/css/main.css";
import "./components/css/design_system.css";

// Bug report: Table nav is always selected on page reload even if page is reloaded while on other pages

function App() {
  return (
    <>
      <div className="empty__state__overlay"></div>
      <Router>
        <Navbar />
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
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
