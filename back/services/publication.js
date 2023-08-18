const { PublicationProvider } = require('../providers');

const getAllPublication = async () => {
  const allCourses = await PublicationProvider.getAllCourses();
  return allCourses;
};

module.exports = {
  getAllPublication,
};
