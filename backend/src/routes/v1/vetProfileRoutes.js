const express = require('express');
const router = express.Router();
const VetProfileController = require('../../controllers/vetProfileController');

// VetProfile Routes
router.post('/', VetProfileController.createVetProfile);
router.get('/', VetProfileController.getVetProfiles);
router.get('/:id', VetProfileController.getVetProfileById);
router.put('/:id', VetProfileController.updateVetProfile);
router.delete('/:id', VetProfileController.deleteVetProfile);

module.exports = router;
