import { useState, useEffect } from "react";

import "./components/css/main.css";
import "./components/css/design_system.css";

import MobileView from "./views/mobileView";
import DesktopView from "./views/desktopView";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isDesktop = () => window.matchMedia("(min-width: 25cm)").matches;

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return function cleanup() {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);

  if (windowWidth > 768 && isDesktop()) {
    return <DesktopView />;
  } else {
    return <MobileView />;
  }
}

export default App;
