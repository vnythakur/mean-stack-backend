const express = require('express');
const { query, oneOf, validationResult } = require('express-validator');

const searchCtrl = require('../controllers/search');

const router = express.Router();

router.get('/', 
    query('text').isLength({ min: 3 }),
    (req, res, next) => {
        /**
         * Validate the query string and throw error if fails
         */
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        searchCtrl.getCareers(req, res, next);
    }
);


module.exports = router;