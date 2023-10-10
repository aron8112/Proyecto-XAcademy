const { PublicationProvider } = require('../providers');

const getAllPublication = async () => {
  const AllPublication = await PublicationProvider.getAllPublication();
  return AllPublication;
};

const getOnePublication = async (publicationId) => {
  const getPublication = await PublicationProvider.getOnePublication(publicationId);
  return getPublication;
};

const createPublicationServ = async (publication) => {
  const newPublication = await PublicationProvider.newPublicationProv(
    publication,
  );

  return newPublication;
};

const modPublicationServ = async (id, body) => {
  const modPublication = await PublicationProvider.modifyPublication(id, body);

  return modPublication;
};

const deletePublicationServ = async (id) => {
  const deletedPublication = await PublicationProvider.deletePublication(id);

  return deletedPublication;
};
module.exports = {
  getAllPublication,
  getOnePublication,
  createPublicationServ,
  modPublicationServ,
  deletePublicationServ,
};
