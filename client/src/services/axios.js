import axios from "axios";

const baseUrl = "https://dlcup.herokuapp.com";
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
