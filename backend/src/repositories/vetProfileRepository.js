const VetProfile = require('../models/VetProfile');

const VetProfileRepository = {
  create: async (data) => {
    return await VetProfile.create(data);
  },
  getAll: async () => {
    return await VetProfile.findAll();
  },
  getById: async (id) => {
    return await VetProfile.findByPk(id);
  },
  update: async (id, data) => {
    return await VetProfile.update(data, {
      where: { idVetProfile: id },
    });
  },
  delete: async (id) => {
    return await VetProfile.destroy({
      where: { idVetProfile: id },
    });
  },
};

module.exports = VetProfileRepository;
