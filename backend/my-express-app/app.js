const express = require('express');
const { connectDB, sequelize } = require('./config/db');
const app = express();
const routes = require('./routes/v1');

// Middlewares
app.use(express.json());

// Import controllers
const appointmentController = require('./controllers/appointmentController');
const medicalRecordController = require('./controllers/medicalRecordController');
const paymentController = require('./controllers/paymentController');
const reminderController = require('./controllers/reminderController');
const vetProfileController = require('./controllers/vetProfileController');
const userController = require('./controllers/userController');

// Import routes
const appointmentRoutes = require('./routes/appointmentRoutes');
const medicalRecordRoutes = require('./routes/medicalRecordRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const vetProfileRoutes = require('./routes/vetProfileRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/medical-records', medicalRecordRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/vet-profiles', vetProfileRoutes);
app.use('/api/users', userRoutes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// Start server and synchronize models
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();
        await sequelize.sync();  // Synchronize models with the database
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

startServer();