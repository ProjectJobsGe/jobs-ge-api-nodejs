const express = require('express');

const router = express.Router();
const jobController = require('../controllers/job.controller');

router.post('/job', jobController.addJob);

module.exports = router;
