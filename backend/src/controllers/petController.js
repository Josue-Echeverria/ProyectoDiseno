const PetRepository = require('../repositories/petRepository');

const PetController = {
  createPet: async (req, res) => {
    try {
      const pet = await PetRepository.create(req.body);
      res.status(201).json(pet);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getPetsByUserId: async (req, res) => {
    try {
      const pets = await PetRepository.getPetsByUserId(req.params.id);
  
      if (!pets || pets.length === 0) {
        return res.status(404).json({ message: 'No pets found for this user' });
      }
  
      res.status(200).json(pets); // Return the pets if found
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
  getPetById: async (req, res) => {
    try {
      const pet = await PetRepository.getById(req.params.id);
      if (pet) {
        res.status(200).json(pet);
      } else {
        res.status(404).json({ message: 'Pet not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updatePet: async (req, res) => {
    try {
      const result = await PetRepository.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deletePet: async (req, res) => {
    try {
      await PetRepository.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = PetController;
