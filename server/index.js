'use-strict';
const express = require("express");
const cors = require('cors');
const router = require("./routes/video");

const app = express();
app.use(cors())
app.use(router)

app.get("/", (req, res) => {
  const path = __dirname + "/index.html"
  res.sendFile(path);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});