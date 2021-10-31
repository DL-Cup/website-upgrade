import React from "react";
import ReactDOM from "react-dom";

import DisplayFixtures from "./Fixtures";

ReactDOM.render(<Hello />, document.getElementById("root"));

function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <DisplayFixtures />
    </div>
  );
}
