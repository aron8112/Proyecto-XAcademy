const { PublicationProvider } = require('../providers');

const getAllPublication = async () => {
  const AllPublication = await PublicationProvider.getAllPublication();
  return AllPublication;
};

module.exports = {
  getAllPublication,
};
