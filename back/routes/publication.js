const express = require('express');
const { publicationController } = require('../controllers');

const router = express.Router();

router.get('/all', publicationController.getAllPublication);

module.exports = router;
