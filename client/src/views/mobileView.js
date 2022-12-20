import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tables from "../pages/tables";
import Fixtures from "../pages/fixtures";
import MobileStats from "../pages/mobileStats";

import MobileNavbar from "../components/mobileNavbar";

import logo from "../components/images/logo-dl.png";

function MobileView() {
  return (
    <Router>
      {/* <Navbar /> */}
      <MobileNavbar />
      <main>
        <img src={logo} className="logo" alt="" />
        <Switch>
          <Route path="/" exact component={Tables} />
          <Route path="/fixtures" exact component={Fixtures} />
          <Route path="/stats" exact component={MobileStats} />
        </Switch>
      </main>
    </Router>
  );
}

export default MobileView;
