/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserCourse', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.STRING, // El tipo de datos debe coincidir con el modelo User
      allowNull: false,
      references: {
        model: 'Users', // Nombre de la tabla User
        key: 'id',
      },
    },
    courseId: {
      type: Sequelize.STRING, // El tipo de datos debe coincidir con el modelo Course
      allowNull: false,
      references: {
        model: 'Course', // Nombre de la tabla Course
        key: 'id',
      },
    },
    attendance: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    enrolled: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: Sequelize.DATE,
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('UserCourse'),
};
