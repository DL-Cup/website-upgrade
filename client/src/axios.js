import axios from 'axios';
const baseUrl = 'http://localhost:3000';
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
  }
});

export default instance;