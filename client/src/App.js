import React, { useState, useEffect } from "react";
// import axios from './axios';
import Table from "./components/pages/table";
import DisplayFixtures from "./components/pages/fixtures"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/table" exact component={Table} />
          <Route path='/fixtures' exact component={DisplayFixtures} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
