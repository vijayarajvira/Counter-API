const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

const countFile = "counter.txt";

app.get("/", (req, res) => {
  let counter = 0;

  if (fs.existsSync(countFile)) {
    counter = parseInt(fs.readFileSync(countFile, "utf8"));
  }

  counter++;
  fs.writeFileSync(countFile, counter.toString());

  res.json({
    message: "Hello from API",
    counter: counter
  });
});

app.listen(PORT, () => console.log(`API running on ${PORT}`));

