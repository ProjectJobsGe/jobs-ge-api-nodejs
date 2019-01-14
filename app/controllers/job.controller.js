const Job = require('../models/job.model');

exports.addJob = (req, res, next) => {
  const job = new Job({
    jobsGeId: req.body.jobsGeId,
    title: req.body.title,
    publicationDate: req.body.publicationDate,
    expirationDate: req.body.expirationDate,
    organization: req.body.organization,
    adType: req.body.adType,
    location: req.body.location,
    category: req.body.category,
    text: req.body.text,
  });

  // eslint-disable-next-line consistent-return
  job.save((err) => {
    if (err) return next(err);

    res.send('Job added');
  });
};
