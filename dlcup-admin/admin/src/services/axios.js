import axios from "axios";

// for testing on network
const instance = axios.create({
  baseURL: "http://192.168.1.6:8000",
});

export default instance;
