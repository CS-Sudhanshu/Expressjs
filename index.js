const express = require("express");
const app = express();

app.set("view engine", "ejs");



app.get("/", (req, res) => {
  res.render("index");
});
app.get("/welcome", (req, res) => {
  res.render("welcome");
});

// Make sure this port is available!
app.listen(3000);