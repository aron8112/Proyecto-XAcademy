/* eslint-disable no-useless-catch */
const crypto = require('crypto');
const { Publication } = require('../models');

const getAllPublication = async () => {
  try {
    const AllPublication = await Publication.findAll();
    return AllPublication;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error when fetching all publications', err);
    throw err;
  }
};

const getOnePublication = async (publicationId) => {
  try {
    const publication = await Publication.findOne({ where: { id: publicationId } });
    return publication;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error when fetching Publication', error);
    throw error;
  }
};

const newPublicationProv = async (publication) => {
  // eslint-disable-next-line no-useless-catch
  const otherPublication = {
    title: publication.publicationTitle,
    description: publication.description,
    image: publication.image,
    start_date: publication.publicationStartDate,
    finish_date: publication.publicationEndDate,
  };

  try {
    const newPublication = await Publication.create({
      // eslint-disable-next-line no-undef
      id: crypto.randomUUID(),
      ...otherPublication,
    });
    return newPublication;
  } catch (error) {
    throw error;
  }
};

const modifyPublication = async (id, body) => {
  const publication = await Publication.findOne({ where: { id } });
  if (publication) {
    const modPublication = await Publication.update(body, { where: { id } });
    if (!modPublication) {
      throw new Error('no se pudo actualizar');
    }
    return modPublication;
  }
  throw new Error('no existe el curso');
};

const deletePublication = async (id) => {
  const delPublication = await Publication.destroy({ where: { id } });
  if (!delPublication) {
    throw new Error();
  }
  return true;
};

module.exports = {
  getAllPublication,
  getOnePublication,
  deletePublication,
  modifyPublication,
  newPublicationProv,
};
