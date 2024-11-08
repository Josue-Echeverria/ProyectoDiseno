const { sequelize } = require('../config/db');
const VetProfile = require('../models/vetProfile');

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
  getByUserId: async (idUsuario) => {
      return await VetProfile.findOne({
        where: {
          idUsuario: idUsuario
        }
      })
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

  getVetProfilesFromStoredProcedure: async () => {
    try {
      let results = await sequelize.query('EXEC getVet', {
        type: sequelize.QueryTypes.SELECT,
      });
      if (!Array.isArray(results)) {
        // Si el resultado no es un array, conviértelo en un array
        results = [results];
    }
      // Convertimos los resultados al modelo de Sequelize sin persistirlos
      const vetProfiles = results.map(data => VetProfile.build(data, { isNewRecord: false }));
      return vetProfiles;
    } catch (error) {
      console.error('Error obteniendo perfiles de veterinario:', error);
      return [];
    }
  },
};


module.exports = VetProfileRepository;
