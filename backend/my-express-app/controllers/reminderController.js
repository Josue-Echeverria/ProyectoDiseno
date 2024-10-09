// reminderController.js

// Import the necessary modules
const Reminder = require('../models/Reminder');

// Controller for getting all reminders
exports.getAllReminders = async (req, res, next) => {
  try {
    const reminders = await Reminder.findAll();
    res.status(200).json(reminders);
  } catch (error) {
    next(error);
  }
};

// Controller for getting a single reminder by ID
exports.getReminderById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const reminder = await Reminder.findByPk(id);
    if (!reminder) {
      res.status(404).json({ message: 'Reminder not found' });
    } else {
      res.status(200).json(reminder);
    }
  } catch (error) {
    next(error);
  }
};

// Controller for creating a new reminder
exports.createReminder = async (req, res, next) => {
  const { title, description, date } = req.body;
  try {
    const reminder = await Reminder.create({ title, description, date });
    res.status(201).json(reminder);
  } catch (error) {
    next(error);
  }
};

// Controller for updating a reminder
exports.updateReminder = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, date } = req.body;
  try {
    const reminder = await Reminder.findByPk(id);
    if (!reminder) {
      res.status(404).json({ message: 'Reminder not found' });
    } else {
      reminder.title = title;
      reminder.description = description;
      reminder.date = date;
      await reminder.save();
      res.status(200).json(reminder);
    }
  } catch (error) {
    next(error);
  }
};

// Controller for deleting a reminder
exports.deleteReminder = async (req, res, next) => {
  const { id } = req.params;
  try {
    const reminder = await Reminder.findByPk(id);
    if (!reminder) {
      res.status(404).json({ message: 'Reminder not found' });
    } else {
      await reminder.destroy();
      res.status(204).end();
    }
  } catch (error) {
    next(error);
  }
};