import { Outlet } from "react-router-dom";

// Components
import Header from "./components/header";
import Navigation from "./components/navigation";

export default function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
