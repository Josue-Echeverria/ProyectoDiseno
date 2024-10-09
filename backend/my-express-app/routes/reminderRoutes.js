const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');

// Routes for reminder-related operations
router.get('/', reminderController.getAllReminders);
router.get('/:id', reminderController.getReminderById);
router.post('/', reminderController.createReminder);
router.put('/:id', reminderController.updateReminder);
router.delete('/:id', reminderController.deleteReminder);

module.exports = router;