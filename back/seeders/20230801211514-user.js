/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */

const bcrypt = require('bcrypt');
const crypto = require('crypto');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: crypto.randomUUID(),
      firstName: 'Admin',
      lastName: 'Gonzalez',
      email: 'admin1@gmail.com',
      password: await bcrypt.hash(
        'imadmin1',
        10,
      ),
      isAdmin: true,
      isTeacher: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Admin',
      lastName: 'Perez',
      email: 'admin2@gmail.com',
      password: await bcrypt.hash(
        'imadmin2',
        10,
      ),
      isAdmin: true,
      isTeacher: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Teacher',
      lastName: 'Juan Valdez',
      email: 'teacher1@gmail.com',
      password: await bcrypt.hash(
        'imteacher1',
        10,
      ),
      isAdmin: false,
      isTeacher: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Teacher',
      lastName: 'Silvia Ocampo',
      email: 'teacher2@gmail.com',
      password: await bcrypt.hash(
        'imteacher2',
        10,
      ),
      isAdmin: false,
      isTeacher: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Juan Ignacio',
      lastName: 'García',
      email: 'student1@gmail.com',
      password: await bcrypt.hash(
        'imstudent1',
        10,
      ),
      isAdmin: false,
      isTeacher: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Juana Mía',
      lastName: 'Perez',
      email: 'student2@gmail.com',
      password: await bcrypt.hash(
        'imstudent2',
        10,
      ),
      isAdmin: false,
      isTeacher: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Anahí',
      lastName: 'Rodriguez',
      email: 'student2@gmail.com',
      password: await bcrypt.hash(
        'imstudent3',
        10,
      ),
      isAdmin: false,
      isTeacher: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Leila',
      lastName: 'Rossi',
      email: 'student2@gmail.com',
      password: await bcrypt.hash(
        'imstudent4',
        10,
      ),
      isAdmin: false,
      isTeacher: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Francisco',
      lastName: 'Guerrero',
      email: 'panchi@gmail.com',
      password: await bcrypt.hash(
        'eramedico',
        10,
      ),
      isAdmin: false,
      isTeacher: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Lucas',
      lastName: 'Salinas',
      email: 'lucas@gmail.com',
      password: await bcrypt.hash(
        'esveterinario',
        10,
      ),
      isAdmin: false,
      isTeacher: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Laura',
      lastName: 'Triviño',
      email: 'lauratriv@gmail.com',
      password: await bcrypt.hash(
        'espaleontologa',
        10,
      ),
      isAdmin: false,
      isTeacher: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  },
};
