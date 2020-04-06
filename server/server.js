const path = require("path");
const express = require("express");
const app = express();

//joining path from current dir..i.e. server, '..' goes one folder up and joins public
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log("Server is up");
});
