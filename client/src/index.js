import React from "react";
import ReactDOM from "react-dom";

import DisplayFixtures from "./Fixtures";
import "./css/fixtures.css";

ReactDOM.render(<Hello />, document.getElementById("root"));

function Hello() {
  return (
    <div>
      <DisplayFixtures />
    </div>
  );
}
