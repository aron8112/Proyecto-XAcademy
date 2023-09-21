const { PublicationServices } = require('../services');

const getAllPublication = async (req, res) => {
  try {
    const getAll = await PublicationServices.getAllPublication();
    res.status(200).send(getAll);
  } catch (error) {
    res.status(400).json({
      action: 'getAllPublication',
      error: error.message,
    });
  }
};

const getPublication = async (req, res) => {
  try {
    const publication = await PublicationServices.getOnePublication(req.params.publicationId);
    if (!publication) {
      res.status(404).json({ action: 'getPublication', error: 'Publication not found' });
    } else {
      res.status(200).send(publication);
    }
  } catch (error) {
    res.status(400).json({
      action: 'getPublication',
      error: error.message,
    });
  }
};

const createPublicationCont = async (req, res) => {
  try {
    const newPublication = await PublicationServices.createPublicationServ(req.body);
    res.status(201).send({
      newPublication,
    });
  } catch (error) {
    res.status(400).json({
      action: 'createPublication',
      error: error.message,
    });
  }
};

const modPublication = async (req, res) => {
  const { id } = req.params;
  try {
    const modifyPublication = await PublicationServices.modPublicationServ(id, req.body);
    res.status(200).json({
      modifyPublication,
      modifiedPublication: 'Modification/s was/were succesfull',
    });
  } catch (error) {
    res.status(400).json({
      action: 'modifyPublication',
      error: error.message,
    });
  }
};

const deletePublication = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPublication = await PublicationServices.deletePublicationServ(id);
    res.status(200).send({
      deletedPublication,
      deletePublication: 'Delete was succesfull',
    });
  } catch (error) {
    res.status(400).json({
      action: 'deletePublication',
      error: error.message,
    });
  }
};

module.exports = {
  getAllPublication,
  getPublication,
  createPublicationCont,
  modPublication,
  deletePublication,
};
