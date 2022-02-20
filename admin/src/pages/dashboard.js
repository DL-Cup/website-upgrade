import { Outlet } from "react-router-dom";

import Navigation from "../components/navigation";

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
