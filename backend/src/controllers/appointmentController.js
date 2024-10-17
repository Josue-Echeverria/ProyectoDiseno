const AppointmentRepository = require('../repositories/appointmentRepository');

const AppointmentController = {
  createAppointment: async (req, res) => {
    try {
      const appointment = await AppointmentRepository.create(req.body);
      res.status(201).json(appointment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAppointments: async (req, res) => {
    try {
      const appointments = await AppointmentRepository.getAll();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAppointmentById: async (req, res) => {
    try {
      const appointment = await AppointmentRepository.getById(req.params.id);
      if (appointment) {
        res.status(200).json(appointment);
      } else {
        res.status(404).json({ message: 'Appointment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateAppointment: async (req, res) => {
    try {
      const result = await AppointmentRepository.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteAppointment: async (req, res) => {
    try {
      await AppointmentRepository.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = AppointmentController;
