import Table from "./components/pages/table";
import Fixtures from "./components/pages/fixtures";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Table} />
          <Route path="/fixtures" exact component={Fixtures} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
