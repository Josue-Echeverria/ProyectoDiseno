const Appointment = require('../models/appointment');

const AppointmentRepository = {
  create: async (data) => {
    return await Appointment.create(data);
  },
  getAll: async () => {
    return await Appointment.findAll();
  },
  getById: async (id) => {
    return await Appointment.findByPk(id);
  },
  update: async (id, data) => {
    return await Appointment.update(data, {
      where: { idAppointment: id },
    });
  },
  delete: async (id) => {
    return await Appointment.destroy({
      where: { idAppointment: id },
    });
  },
};

module.exports = AppointmentRepository;

