const mongoose = require('mongoose');

const devDbUrl = 'mongodb://mdivani:jobsge123@ds145463.mlab.com:45463/jobsge';
const mongoDB = process.env.MONGODB_URI || devDbUrl;

exports.connect = (dbUrl = mongoDB) => {
  mongoose.connect(dbUrl, { useNewUrlParser: true });
  const db = mongoose.connection;

  db.on('connected', () => console.log('connected to db'));
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.on('disconnected', () => console.log('db connection is disconnected'));

  const gracefulExit = () => {
    mongoose.connection.close(() => {
      console.log(`Mongoose default connection with DB :${dbUrl} is disconnected through app termination`);
      process.exit(0);
    });
  };

  process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
};

exports.disconnect = () => mongoose.disconnect();
