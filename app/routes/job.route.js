const express = require('express');

const router = express.Router();
const jobController = require('../controllers/job.controller');

router.get('/jobs', jobController.test);

module.exports = router;
