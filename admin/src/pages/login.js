import React from "react";
import { useState, useRef } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import axios from "../services/axios";

export default function Login({ authIn }) {
  const navigate = useNavigate();
  const passowrdInput = useRef(null);

  async function authenticate(e) {
    e.preventDefault();
    await axios
      .post("/authenticate", { password: e.target.password.value })
      .then((res) => {
        if (res.data) {
          authIn();
          navigate("/api/scores");
        }
      });

    // if (valid) {
    //   authIn();
    //   navigate("/api/scores");
    // }
  }

  return (
    <>
      <main id="login">
        <img src={"../../images/Logo.png"} alt="" />

        <h2>Dlcup Admin</h2>
        <form onSubmit={authenticate}>
          <div
            className="label-group"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <label htmlFor="password">Password</label>
            <span
              style={{ color: "var(--brandG)" }}
              onClick={(e) => {
                if (passowrdInput.current.type === "text") {
                  passowrdInput.current.type = "password";
                  e.target.innerHTML = "show";
                } else {
                  passowrdInput.current.type = "text";
                  e.target.innerHTML = "hide";
                }
              }}
            >
              show
            </span>
          </div>
          <input type="password" name="password" ref={passowrdInput} />

          <input type="submit" value="Login" />
        </form>
      </main>
    </>
  );
}
