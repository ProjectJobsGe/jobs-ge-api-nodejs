const express = require('express');

const router = express.Router();
const jobController = require('../controllers/job.controller');

router.post('/job', jobController.addJob);
router.get('/job/:id', jobController.getJob);

module.exports = router;
