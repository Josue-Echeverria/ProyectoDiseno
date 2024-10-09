// vetProfileController.js

// Import the repository functions for vet profile
const {
  createVetProfile,
  getVetProfile,
  updateVetProfile,
  deleteVetProfile,
} = require('../repositories/repositoryTemplate');

// Controller function to create a vet profile
const createVetProfileController = async (req, res, next) => {
  try {
    // Get the data from the request body
    const { name, specialization, address, contactNumber } = req.body;

    // Call the repository function to create the vet profile
    const vetProfile = await createVetProfile(name, specialization, address, contactNumber);

    // Return the created vet profile as the response
    res.status(201).json(vetProfile);
  } catch (error) {
    next(error);
  }
};

// Controller function to get a vet profile
const getVetProfileController = async (req, res, next) => {
  try {
    // Get the vet profile ID from the request parameters
    const { id } = req.params;

    // Call the repository function to get the vet profile
    const vetProfile = await getVetProfile(id);

    // Return the vet profile as the response
    res.json(vetProfile);
  } catch (error) {
    next(error);
  }
};

// Controller function to update a vet profile
const updateVetProfileController = async (req, res, next) => {
  try {
    // Get the vet profile ID from the request parameters
    const { id } = req.params;

    // Get the updated data from the request body
    const { name, specialization, address, contactNumber } = req.body;

    // Call the repository function to update the vet profile
    const vetProfile = await updateVetProfile(id, name, specialization, address, contactNumber);

    // Return the updated vet profile as the response
    res.json(vetProfile);
  } catch (error) {
    next(error);
  }
};

// Controller function to delete a vet profile
const deleteVetProfileController = async (req, res, next) => {
  try {
    // Get the vet profile ID from the request parameters
    const { id } = req.params;

    // Call the repository function to delete the vet profile
    await deleteVetProfile(id);

    // Return a success message as the response
    res.json({ message: 'Vet profile deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Export the controller functions
module.exports = {
  createVetProfileController,
  getVetProfileController,
  updateVetProfileController,
  deleteVetProfileController,
};