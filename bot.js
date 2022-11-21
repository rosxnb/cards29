const express = require("express");
const cors = require("cors");

const bid = require("./bid");
const chooseTrump = require("./chooseTrump");
const play = require("./play");

// ----------------------------------------------------------------

const app = express();
const port = 8001;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.listen(port, () => {
  console.log(`bot running on port: ${port}`);
});


// ----------------------------------------------------------------

app.get("/hi", (req, res) => {
  console.log("enpoint reached! 👻");
  res.send({ value: "drink coffee, read, code, improve and repeat" });
});


app.post("/bid", (req, res) => {
  const result = bid(req.body);
  res.send(result);
});


app.post("/chooseTrump", (req, res) => {
  const result = chooseTrump(req.body);
  res.send(result);
});


app.post("/play", (req, res) => {
  const result = play(req.body);
  res.send(result);
});
