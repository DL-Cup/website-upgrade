import { Outlet } from "react-router-dom";

// Components
import Header from "./components/header";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
