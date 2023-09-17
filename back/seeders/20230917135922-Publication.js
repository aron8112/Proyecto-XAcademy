/* eslint-disable no-unused-vars */
const crypto = require('crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Publication', [
      {
        id: crypto.randomUUID(),
        title: 'Acupuntura Evento Fest',
        description: 'Ut in justo egestas magna imperdiet varius vel quis erat. Cras semper nunc quis enim laoreet accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique feugiat quam. Phasellus vulputate nulla vel sem accumsan, non dapibus erat fermentum. Proin semper sapien purus, a suscipit metus scelerisque id. Maecenas rhoncus rhoncus vestibulum.',
        image: 'imagenURL',
        start_date: '2023-08-01',
        finish_date: '2023-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        title: 'Master class Fest',
        description: 'Ut in justo egestas magna imperdiet varius vel quis erat. Cras semper nunc quis enim laoreet accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique feugiat quam. Phasellus vulputate nulla vel sem accumsan, non dapibus erat fermentum. Proin semper sapien purus, a suscipit metus scelerisque id. Maecenas rhoncus rhoncus vestibulum.',
        image: 'imagenURL',
        start_date: '2023-09-04',
        finish_date: '2023-09-04',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        title: 'Lectura grupal anual',
        description: 'Ut in justo egestas magna imperdiet varius vel quis erat. Cras semper nunc quis enim laoreet accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique feugiat quam. Phasellus vulputate nulla vel sem accumsan, non dapibus erat fermentum. Proin semper sapien purus, a suscipit metus scelerisque id. Maecenas rhoncus rhoncus vestibulum.',
        image: 'imagenURL',
        start_date: '2023-08-01',
        finish_date: '2023-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        title: 'Intercambio de productos / feria',
        description: 'Ut in justo egestas magna imperdiet varius vel quis erat. Cras semper nunc quis enim laoreet accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique feugiat quam. Phasellus vulputate nulla vel sem accumsan, non dapibus erat fermentum. Proin semper sapien purus, a suscipit metus scelerisque id. Maecenas rhoncus rhoncus vestibulum.',
        image: 'imagenURL',
        start_date: '2023-08-01',
        finish_date: '2023-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        title: 'Demostracion anual de cursos',
        description: 'Ut in justo egestas magna imperdiet varius vel quis erat. Cras semper nunc quis enim laoreet accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique feugiat quam. Phasellus vulputate nulla vel sem accumsan, non dapibus erat fermentum. Proin semper sapien purus, a suscipit metus scelerisque id. Maecenas rhoncus rhoncus vestibulum.',
        image: 'imagenURL',
        start_date: '2023-08-01',
        finish_date: '2023-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        title: 'Acupuntura Evento Fest',
        description: 'Ut in justo egestas magna imperdiet varius vel quis erat. Cras semper nunc quis enim laoreet accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique feugiat quam. Phasellus vulputate nulla vel sem accumsan, non dapibus erat fermentum. Proin semper sapien purus, a suscipit metus scelerisque id. Maecenas rhoncus rhoncus vestibulum.',
        image: 'imagenURL',
        start_date: '2023-08-01',
        finish_date: '2023-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Publication', null, {});
  },
};
