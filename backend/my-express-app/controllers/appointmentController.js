// appointmentController.js

// Import the Appointment model from the database
const { Appointment } = require('../models');

// Controller for getting all appointments
exports.getAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json(appointments);
  } catch (error) {
    next(error);
  }
};

// Controller for creating a new appointment
exports.createAppointment = async (req, res, next) => {
  try {
    const { title, date, time, userId, vetId } = req.body;
    const appointment = await Appointment.create({
      title,
      date,
      time,
      userId,
      vetId,
    });
    res.status(201).json(appointment);
  } catch (error) {
    next(error);
  }
};

// Controller for updating an appointment
exports.updateAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, date, time, userId, vetId } = req.body;
    const appointment = await Appointment.findByPk(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    appointment.title = title;
    appointment.date = date;
    appointment.time = time;
    appointment.userId = userId;
    appointment.vetId = vetId;
    await appointment.save();
    res.status(200).json(appointment);
  } catch (error) {
    next(error);
  }
};

// Controller for deleting an appointment
exports.deleteAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findByPk(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    await appointment.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};