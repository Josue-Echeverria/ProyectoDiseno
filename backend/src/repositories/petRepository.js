const Pet = require('../models/pet');

const PetRepository = {
  create: async (data) => {
    return await Pet.create(data);
  },
  getByUserId: async (userId) => {
    return await Pet.findAll({
      where: { idUser: userId },
    });
  },
  getAll: async () => {
    return await Pet.findAll();
  },
  getById: async (id) => {
    return await Pet.findByPk(id);
  },
  update: async (id, data) => {
    return await Pet.update(data, {
      where: { idPet: id },
    });
  },
  delete: async (id) => {
    return await Pet.destroy({
      where: { idPet: id },
    });
  },
};

module.exports = PetRepository;
