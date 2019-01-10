const express = require('express');
const bodyParser = require('body-parser');

// initialize app
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log("server is up!");
});