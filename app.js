const express = require("express");
const app = express();
const port = 3000;

const couples = {
  bessie: "wilbur",
  alex: "emma",
  allie: "xander",
};

app.get("/partners/:name", (req, res) => {
  const personName = req.params.name;
  const response = couples[personName] ? couples[personName] : "unknown";
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
