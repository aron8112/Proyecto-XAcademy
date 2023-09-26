/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Publication', {
      id: Sequelize.STRING,
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      image: Sequelize.STRING,
      start_date: Sequelize.DATE,
      finish_date: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Publication');
  },
};
