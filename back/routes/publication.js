const express = require('express');
const { publicationController } = require('../controllers');

const router = express.Router();

router.get('/all', publicationController.getAllPublication);
router.get('/:publicationId', publicationController.getPublication);

router.put('/modify/:id', publicationController.modPublication);

router.post('/create', publicationController.createPublicationCont);
router.delete('/deletepublication/:id', publicationController.deletePublication);

module.exports = router;
