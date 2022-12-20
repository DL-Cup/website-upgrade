import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/header";
import MobileNavbar from "../components/mobileNavbar";

import Tables from "../pages/tables";
import Fixtures from "../pages/fixtures";
import MobileStats from "../pages/mobileStats";

function MobileView() {
  return (
    <Router>
      <MobileNavbar />
      <main>
        <Header />
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
