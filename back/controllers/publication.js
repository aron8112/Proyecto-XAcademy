const { PublicationServices } = require('../services');

const getAllPublication = async (req, res) => {
  try {
    const getAll = await PublicationServices.getAllCourses();
    res.status(200).send({
      payload: getAll,
    });
  } catch (error) {
    res.status(400).json({
      action: 'getAllPublication',
      error: error.message,
    });
  }
};

module.exports = {
  getAllPublication,
};
