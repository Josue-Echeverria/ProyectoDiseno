const UserRepository = require('../repositories/userRepository');
const PetRepository = require('../repositories/petRepository');

const UserController = {
  createUser: async (req, res) => {
    try {
      const user = await UserRepository.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await UserRepository.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await UserRepository.getById(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUserPets: async (req, res) => {
    try {
      const pets = await PetRepository.getByUserId(req.params.id);
      res.status(200).json(pets);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const result = await UserRepository.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await UserRepository.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = UserController;

