const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jobsSchema = new Schema({
  jobsGeId: { type: Number, required: true },
  title: { type: String, required: true },
  publicationDate: { type: String, required: true },
  expirationDate: { type: String, required: true },
  organization: { type: String, required: true },
  adType: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('jobs', jobsSchema);
