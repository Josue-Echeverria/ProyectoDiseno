const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/userController');

// User Routes
router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

// User's Pets
router.get('/:id/pets', UserController.getUserPets);

module.exports = router;
