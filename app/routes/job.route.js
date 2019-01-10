const express = require('express');
const router = express.Router();
const job_controller = require('../controllers/job.controller');

router.get('/jobs', job_controller.test);

module.exports = router;
