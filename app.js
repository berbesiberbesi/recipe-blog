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

const recipes = [
    {"title": "test 1", "date": "17/03/22", "cooking time": "30", "content": " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit dicta facere deserunt reprehenderit ea debitis, tempore mollitia omnis nulla eveniet eaque quas commodi vero alias consequatur obcaecati fugit? Cupiditate doloribus pariatur ipsam hic rem nihil non architecto dolores, nam minima, voluptatibus sapiente veniam animi laudantium amet voluptate aperiam asperiores?"},
    {"title": "test 2", "date": "18/03/22", "cooking time": "20", "content": " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit dicta facere deserunt reprehenderit ea debitis, tempore mollitia omnis nulla eveniet eaque quas commodi vero alias consequatur obcaecati fugit? Cupiditate doloribus pariatur ipsam hic rem nihil non architecto dolores, nam minima, voluptatibus sapiente veniam animi laudantium amet voluptate aperiam asperiores?"},
    {"title": "test 3", "date": "19/03/22", "cooking time": "10", "content": " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit dicta facere deserunt reprehenderit ea debitis, tempore mollitia omnis nulla eveniet eaque quas commodi vero alias consequatur obcaecati fugit? Cupiditate doloribus pariatur ipsam hic rem nihil non architecto dolores, nam minima, voluptatibus sapiente veniam animi laudantium amet voluptate aperiam asperiores?"}

]

