import axios from "./axios";

const websiteDataCacheMap = new Map();

function getTable() {
  if (!websiteDataCacheMap.has("table")) {
    websiteDataCacheMap.set(
      "table",
      axios.get("table").then((res) => res.data)
    );
  }

  return websiteDataCacheMap.get("table");
}

function getPlayers() {
  if (!websiteDataCacheMap.has("players")) {
    websiteDataCacheMap.set(
      "players",
      axios.get("players").then((res) => res.data)
    );
  }

  return websiteDataCacheMap.get("players");
}

function getFixtures(teamName) {
  return axios.get(`fixtures/team/${teamName}`).then((res) => res.data);
}

export { getTable, getPlayers, getFixtures };
