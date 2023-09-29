const express = require("express");
const app = express();
const port = 3000;

app.get("/api/data", (req, res) => {
  res.send("Hello, GitHub Actions World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
