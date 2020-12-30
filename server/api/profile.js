const express = require('express');

const searchCtrl = require('../controllers/search');

const router = express.Router();


router.get('/:slug', searchCtrl.getCareerBySlug);


module.exports = router;