const express = require('express');
const router = express.Router();

const medicalRecordController = require('../controllers/medicalRecordController');

// Routes for medical record operations
router.get('/', medicalRecordController.getAllMedicalRecords);
router.get('/:id', medicalRecordController.getMedicalRecordById);
router.post('/', medicalRecordController.createMedicalRecord);
router.put('/:id', medicalRecordController.updateMedicalRecord);
router.delete('/:id', medicalRecordController.deleteMedicalRecord);

module.exports = router;