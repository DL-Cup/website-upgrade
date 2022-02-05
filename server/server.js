require("dotenv").config();

const express = require("express");
const CORS = require("cors");

const mongoose = require("mongoose");
const Kitten = require("./models/kitten");

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION);
}

main()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(CORS());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/new-kitten", async (req, res) => {
  let ifExist = await Kitten.findOne({ name: req.body.name });

  if (ifExist) {
    res.send(`${req.body.name} already exists in DB`);
  } else {
    await new Kitten({ name: req.body.name }).save();
    res.send(`${req.body.name} officially a kittens-for-kittens member`);
  }
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
