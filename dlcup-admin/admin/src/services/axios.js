import axios from "axios";

// for testing on network
const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export default instance;
