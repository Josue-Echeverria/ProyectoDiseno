// paymentController.js

// Example controller for handling payment-related operations

const Payment = require('../models/Payment');

// Get all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single payment by ID
exports.getPaymentById = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = await Payment.findByPk(id);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new payment
exports.createPayment = async (req, res) => {
  const { amount, description } = req.body;
  try {
    const payment = await Payment.create({ amount, description });
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a payment
exports.updatePayment = async (req, res) => {
  const { id } = req.params;
  const { amount, description } = req.body;
  try {
    const payment = await Payment.findByPk(id);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    payment.amount = amount;
    payment.description = description;
    await payment.save();
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a payment
exports.deletePayment = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = await Payment.findByPk(id);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    await payment.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};