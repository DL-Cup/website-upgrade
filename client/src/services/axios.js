import axios from "axios";

const baseUrl = "https://dlcup-server.onrender.com/";
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
