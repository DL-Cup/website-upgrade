import axios from "axios";

const baseUrl = "https://dlcup.herokuapp.com";
// const localBaseUrl = "http://10.4.108.205:5000";
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
