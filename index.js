const express = require("express");
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Got Home");
});

app.post("/callback", (req, res) => {
  console.log('data', req.body);
  res.end();
});

app.listen(3000);
