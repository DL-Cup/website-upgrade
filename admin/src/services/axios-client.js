import axios from "axios";

// for testing on network
const instance = axios.create({
  baseURL: "https://dlcup.herokuapp.com",
});

export default instance;
