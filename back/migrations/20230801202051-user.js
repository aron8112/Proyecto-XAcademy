/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: Sequelize.STRING,
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      isAdmin: Sequelize.BOOLEAN,
      isTeacher: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    }).then(() => queryInterface.addIndex('Users', ['id']));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
