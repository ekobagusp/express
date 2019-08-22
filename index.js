const express = require("express");
var cors = require("cors");

let app = express();
app.use(
  cors({
    exposedHeaders: "*"
  })
);

app.get("/", function(req, res) {
  res.json({ Message: "Hello World!" });
});

const port = 3333;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
