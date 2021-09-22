const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
