const express = require('express');
const router = express.Router();

const vetProfileController = require('../controllers/vetProfileController');

// Routes for vet profile operations
router.get('/', vetProfileController.getAllVetProfiles);
router.get('/:id', vetProfileController.getVetProfileById);
router.post('/', vetProfileController.createVetProfile);
router.put('/:id', vetProfileController.updateVetProfile);
router.delete('/:id', vetProfileController.deleteVetProfile);

module.exports = router;