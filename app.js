const express = require("express");
const app = express();
const cors = require("cors");
// const api = require("./data.json");

app.use(cors());
// const selected = api[0];

app.get("/", (req, res) => {
  res.send(
    "welcome to localhost food recipe's guys, everything is full working with the local server"
  );
});

app.get("/api", (req, res) => {
  res.send(api);
});

app.get("/api/selected", (req, res) => {
  res.send(selected);
});

app.listen(8080, function () {
  console.log("server is up and running on port 8080");
});
