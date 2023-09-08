/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Course', {
      id: Sequelize.STRING,
      courseName: Sequelize.STRING,
      courseStartDate: Sequelize.DATE,
      courseEndDate: Sequelize.DATE,
      description: Sequelize.TEXT,
      shortDescription: Sequelize.TEXT,
      amountclasses: Sequelize.INTEGER,
      schedule: Sequelize.STRING,
      attendance: Sequelize.INTEGER,
      deleted: Sequelize.BOOLEAN,
      visualized: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    }).then(() => queryInterface.addIndex('Course', ['id']));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Course');
  },
};
