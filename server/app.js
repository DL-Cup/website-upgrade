const Express = require("express");
const app = Express();

const { readFileSync } = require("fs");
const path = require("path");

app.get("/fixtures", (req, res) => {
  let data = readFileSync(
    path.resolve(__dirname, "fixtures-mock-data.json"),
    "utf8"
  );

  res.json(data);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
