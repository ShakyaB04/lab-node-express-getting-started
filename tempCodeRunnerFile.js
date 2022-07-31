const express = require("express");
const app = express();
const expressport = 8001;

app
  .get("/", (req, res) => res.send("Welcome to Express server!"))
  .listen(expressport, () =>
    console.log(`Express server is running on port ${expressport}!`)
  );