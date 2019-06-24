var express = require("express");
var app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.post("/url_post", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

/*
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
require("./app/routes")(app, {});
app.listen(port, () => {
  console.log("We are live on " + port);
});
*/
