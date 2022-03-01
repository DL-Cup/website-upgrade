import axios from "axios";

const baseURL = "https://dlcup.herokuapp.com";
// const baseURL = "http://localhost:5000"; //local
const instance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
