const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const recipes = require("./data.json");

app.use(cors());
// const selected = api[0];

app.get("/", (req, res) => {
  res.send(
    "welcome to localhost food recipe's guys, everything is full working with the local server"
  );
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipes/selected", (req, res) => {
  res.send(recipes[0]);
});

app.listen(port, function () {
  console.log(`server is up and running on port ${port}`);
});

