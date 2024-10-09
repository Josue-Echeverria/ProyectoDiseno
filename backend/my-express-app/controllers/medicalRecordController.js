// medicalRecordController.js

// Import the necessary modules
const MedicalRecord = require('../models/MedicalRecord');

// Controller for handling medical record-related operations
const medicalRecordController = {
  // Get all medical records
  getAllMedicalRecords: async (req, res, next) => {
    try {
      const medicalRecords = await MedicalRecord.findAll();
      res.status(200).json(medicalRecords);
    } catch (error) {
      next(error);
    }
  },

  // Get a single medical record by ID
  getMedicalRecordById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const medicalRecord = await MedicalRecord.findByPk(id);
      if (!medicalRecord) {
        return res.status(404).json({ message: 'Medical record not found' });
      }
      res.status(200).json(medicalRecord);
    } catch (error) {
      next(error);
    }
  },

  // Create a new medical record
  createMedicalRecord: async (req, res, next) => {
    const { patientId, description } = req.body;
    try {
      const medicalRecord = await MedicalRecord.create({ patientId, description });
      res.status(201).json(medicalRecord);
    } catch (error) {
      next(error);
    }
  },

  // Update a medical record
  updateMedicalRecord: async (req, res, next) => {
    const { id } = req.params;
    const { description } = req.body;
    try {
      const medicalRecord = await MedicalRecord.findByPk(id);
      if (!medicalRecord) {
        return res.status(404).json({ message: 'Medical record not found' });
      }
      medicalRecord.description = description;
      await medicalRecord.save();
      res.status(200).json(medicalRecord);
    } catch (error) {
      next(error);
    }
  },

  // Delete a medical record
  deleteMedicalRecord: async (req, res, next) => {
    const { id } = req.params;
    try {
      const medicalRecord = await MedicalRecord.findByPk(id);
      if (!medicalRecord) {
        return res.status(404).json({ message: 'Medical record not found' });
      }
      await medicalRecord.destroy();
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = medicalRecordController;