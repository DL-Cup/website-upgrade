import axios from "axios";

const baseURL = "https://dlcup-server.onrender.com/";
const instance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
