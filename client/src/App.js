// import axios from './axios';
import Table from "./components/pages/table";
import Fixtures from "./components/pages/fixtures";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/table" exact component={Table} />
          <Route path="/fixtures" exact component={Fixtures} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
