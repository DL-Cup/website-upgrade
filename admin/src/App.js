import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

// Components
import Header from "./components/header";
import MatchCenter from "./components/matchCenter";
import Schedule from "./components/schedule";

export default function App() {
  const [user, setUser] = useState(sessionStorage.getItem("auth") ?? false);

  return (
    <>
      {user && (
        <Header
          authOut={() => {
            setUser(false);
            sessionStorage.setItem("auth", "");
          }}
          user={user}
        />
      )}

      <Routes>
        {!user && (
          <Route
            path="/"
            element={
              <Login
                authIn={() => {
                  setUser(true);
                  sessionStorage.setItem("auth", true);
                }}
              />
            }
          />
        )}

        {user && (
          <Route path="/api" element={<Dashboard />}>
            <Route path="scores" element={<MatchCenter />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>
        )}

        <Route
          path="*"
          element={<Navigate to={user ? "/api/scores" : "/"} />}
        />
      </Routes>
    </>
  );
}
