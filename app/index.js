const express = require('express');
const bodyParser = require('body-parser');
const job = require('./routes/job.route');

// initialize app
const app = express();

app.use('/', job);

let port = 3000;

app.listen(port, () => {
  console.log("server is up!");
});