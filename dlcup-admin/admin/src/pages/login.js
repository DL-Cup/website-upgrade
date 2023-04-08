import React from "react";
import { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import axios from "../services/axios";

import Header from "../components/header";

import "./css/login.css";

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
  }

  return (
    <>
      <main id="login">
        <div id="grid-container">
          <Header />
          {/* <img src={"../../images/Logo.png"} alt="" /> */}
          <form onSubmit={authenticate}>
            <label htmlFor="password">Password</label>
            <div>
              <input type="password" name="password" ref={passowrdInput} />
              <span
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
                Show
              </span>
            </div>

            <input type="submit" value="Login" />
          </form>
        </div>
      </main>
    </>
  );
}
