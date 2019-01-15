const express = require('express');
const db = require('./database');
const bodyParser = require('body-parser');
const job = require('./routes/job.route');

// connect to database
db.connect();
// initialize app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', job);

module.exports = app;