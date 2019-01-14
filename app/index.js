const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const job = require('./routes/job.route');

const devDbUrl = 'mongodb://mdivani:jobsge123@ds145463.mlab.com:45463/jobsge';
const mongoDB = process.env.MONGODB_URI || devDbUrl;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// initialize app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', job);

const port = 3000;

app.listen(port, () => {
  console.log('server is up!');
});
