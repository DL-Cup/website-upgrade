const Express = require("express");
const CORS = require("cors");

const mongoose = require("mongoose");
const GameWeek = require("./models/fixtures");

const app = Express();

try {
  main();

  async function main() {
    await mongoose.connect("mongodb://localhost:27017/dlcup");
  }
} catch (err) {
  console.log(err);
}

app.use(CORS());

app.get("/fixtures/:id", async (req, res) => {
  const result = await GameWeek.find({ GWID: req.params?.id });
  res.status(200).json(result);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
