import axios from "axios";

// const baseUrl = "https://dlcup.herokuapp.com";
const baseUrl = "http://192.168.1.2:5000"; //local
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
