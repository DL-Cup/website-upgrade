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

function getFixturesByGameWeek(gameweekID) {
  if (!websiteDataCacheMap.has(`fixtures/${gameweekID}`)) {
    websiteDataCacheMap.set(
      `fixtures/${gameweekID}`,
      axios.get(`fixtures/${gameweekID}`).then((res) => res.data)
    );
  }

  return websiteDataCacheMap.get(`fixtures/${gameweekID}`);
}

function getFixturesByTeamName(teamName) {
  if (!websiteDataCacheMap.has(`fixtures/team/${teamName}`)) {
    websiteDataCacheMap.set(
      `fixtures/team/${teamName}`,
      axios.get(`fixtures/team/${teamName}`).then((res) => res.data)
    );
  }

  return websiteDataCacheMap.get(`fixtures/team/${teamName}`);
}

export { getTable, getPlayers, getFixturesByGameWeek, getFixturesByTeamName };
