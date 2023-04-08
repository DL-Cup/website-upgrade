import { Outlet } from "react-router-dom";

import Navigation from "../components/navigation";

import "./css/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
