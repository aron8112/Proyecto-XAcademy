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

module.exports = {
  getAllPublication,
};
