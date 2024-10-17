const VetProfileRepository = require('../repositories/vetProfileRepository');

const VetProfileController = {
  createVetProfile: async (req, res) => {
    try {
      const vetProfile = await VetProfileRepository.create(req.body);
      res.status(201).json(vetProfile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getVetProfiles: async (req, res) => {
    try {
      const vetProfiles = await VetProfileRepository.getAll();
      res.status(200).json(vetProfiles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getVetProfileById: async (req, res) => {
    try {
      const vetProfile = await VetProfileRepository.getById(req.params.id);
      if (vetProfile) {
        res.status(200).json(vetProfile);
      } else {
        res.status(404).json({ message: 'VetProfile not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateVetProfile: async (req, res) => {
    try {
      const result = await VetProfileRepository.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteVetProfile: async (req, res) => {
    try {
      await VetProfileRepository.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = VetProfileController;
