import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/header";
import MobileNavbar from "../components/mobileNavbar";

import Tables from "../pages/tables";
import Fixtures from "../pages/fixtures";
import MobileStats from "../pages/mobileStats";
import About from "../pages/about";

function MobileView() {
  return (
    <Router>
      <MobileNavbar />
      <main>
        <Header />
        <Switch>
          <Route path="/" exact component={Tables} />
          <Route path="/fixtures" exact component={Fixtures} />
          <Route path="/stats" exact component={MobileStats} />
          <Route path="/about" exact component={About} />
        </Switch>
      </main>
    </Router>
  );
}

export default MobileView;
