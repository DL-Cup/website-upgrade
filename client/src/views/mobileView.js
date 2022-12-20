import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tables from "../pages/tables";
import Fixtures from "../pages/fixtures";
import MobileStats from "../pages/mobileStats";

import MobileNavbar from "../components/mobileNavbar";

import logo from "../components/images/logo-dl.png";

function MobileView() {
  return (
    <Router>
      <MobileNavbar />
      <main>
        <header>
          <img src={logo} className="logo" alt="" />
        </header>
        <Switch>
          <Route path="/" exact component={Tables} />
          <div className="wrapper">
            <Route path="/fixtures" exact component={Fixtures} />
            <Route path="/stats" exact component={MobileStats} />
          </div>
        </Switch>
      </main>
    </Router>
  );
}

export default MobileView;
