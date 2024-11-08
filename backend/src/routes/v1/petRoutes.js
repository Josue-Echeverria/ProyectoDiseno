const express = require('express');
const router = express.Router();
const PetController = require('../../controllers/petController');

// Pet Routes
router.post('/', PetController.createPet);
router.get('/:id', PetController.getPetsByUserId);
router.get('/:id', PetController.getPetById);
router.put('/:id', PetController.updatePet);
router.delete('/:id', PetController.deletePet);

module.exports = router;

