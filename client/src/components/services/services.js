import axios from "./../../axios";

function getTable() {
  return axios.get("table").then((res) => res.data);
}

function getPlayers() {
  return axios.get("players").then((res) => res.data);
}

export { getTable, getPlayers };
