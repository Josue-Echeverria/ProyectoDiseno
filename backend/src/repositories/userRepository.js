const User = require('../models/user');

const UserRepository = {
  create: async (data) => {
    return await User.create(data);
  },
  getAll: async () => {
    return await User.findAll();
  },
  getById: async (id) => {
    return await User.findByPk(id);
  },
  update: async (id, data) => {
    return await User.update(data, {
      where: { idUser: id },
    });
  },
  delete: async (id) => {
    return await User.destroy({
      where: { idUser: id },
    });
  },
};

module.exports = UserRepository;

