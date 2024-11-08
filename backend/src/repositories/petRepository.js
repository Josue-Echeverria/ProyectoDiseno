const { sequelize } = require('../config/db');
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
  getPetsByUserId: async (idUsuario) => {
    const pets = await sequelize.query('EXEC getPetByUserId @idUsuario = :idUsuario', {
      replacements: { idUsuario }, // Reemplaza el parámetro :idUsuario
      type: sequelize.QueryTypes.SELECT, // Especifica que esperamos un array de resultados
    });
    return pets;
  }
};

module.exports = PetRepository;
