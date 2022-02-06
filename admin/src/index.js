import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import MatchCenter from "./pages/matchCenter";
import Schedule from "./pages/schedule";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="scores" element={<MatchCenter />} />
        <Route index element={<Schedule />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
