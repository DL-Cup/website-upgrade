import Table from "./components/pages/table";
import Fixtures from "./components/pages/fixtures";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./components/css/main.css";

// Bug report: Table nav is always selected on page reload even if page is reloaded while on other pages

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={Table} />
            <Route path="/fixtures" exact component={Fixtures} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
