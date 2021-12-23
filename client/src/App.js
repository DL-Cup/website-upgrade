import Tables from "./components/pages/tables";
import Fixtures from "./components/pages/fixtures";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/mobileNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./components/css/main.css";
import "./components/css/design_system.css";

import { ReactComponent as Logo } from "./components/images/logo-dl.svg";

// Bug report: Table nav is always selected on page reload even if page is reloaded while on other pages

function App() {
  return (
    <>
      <Router>
        <Logo></Logo>
        <Navbar />
        <MobileNavbar />
        <main>
          <Switch>
            <Route path="/" exact component={Tables} />
            <Route path="/fixtures" exact component={Fixtures} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
