/* eslint-disable no-unused-vars */
const crypto = require('crypto');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Course', [
      {
        id: crypto.randomUUID(),
        courseName: 'Acupuntura',
        courseStartDate: '2023-08-01',
        courseEndDate: '2023-10-01',
        description: 'Ut in justo egestas magna imperdiet varius vel quis erat. Cras semper nunc quis enim laoreet accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique feugiat quam. Phasellus vulputate nulla vel sem accumsan, non dapibus erat fermentum. Proin semper sapien purus, a suscipit metus scelerisque id. Maecenas rhoncus rhoncus vestibulum.',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor lectus quis diam cursus, sit amet pellentesque lorem consequat. Proin laoreet quam a molestie lacinia. Ut efficitur pellentesque efficitur. Quisque vitae magna vitae leo fermentum sollicitudin. Morbi viverra massa facilisis, fermentum nisi quis, dapibus mauris. Lorem ipsum dolor sit amet.',
        amountclasses: 4,
        schedule: 'Lunes de 17:00 a 20:00',
        deleted: false,
        attendance: 0,
        visualized: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        courseName: 'Acupuntura nivel 2',
        courseStartDate: '2023-08-01',
        courseEndDate: '2023-10-01',
        description: 'Cras congue aliquet orci, vel aliquam odio pellentesque non. Nullam ex arcu, iaculis eu laoreet a, lacinia nec risus. Ut leo erat, vestibulum quis finibus a, viverra sed ex. Vivamus ornare sodales odio sit amet sollicitudin. Morbi sit amet ipsum nisi. Donec id vulputate tortor. In consequat tortor quis lectus egestas tristique. Ut quis leo aliquet, facilisis mi ut, placerat nunc. Quisque ultrices.',
        shortDescription: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        amountclasses: 4,
        schedule: 'Lunes de 17:00 a 20:00',
        deleted: false,
        attendance: 0,
        visualized: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        courseName: 'Semipermanente',
        courseStartDate: '2023-08-01',
        courseEndDate: '2023-10-01',
        description: 'Integer nec mauris vel tellus mollis gravida in vitae augue. Vivamus non dignissim leo. Proin sit amet tortor sit amet orci tempus venenatis. In vel lacus felis. Sed ut fermentum elit, a ornare magna. Maecenas efficitur nec nisl in tincidunt. Fusce tempus posuere dolor, eu pretium tortor mattis vel. In tempor sagittis sapien vitae rhoncus. Aenean molestie rutrum pulvinar.',
        shortDescription: 'Nunc nec enim ipsum. Vestibulum eleifend facilisis ligula eget elementum. Curabitur ut ullamcorper ipsum. Cras velit dolor, consectetur rhoncus volutpat id, condimentum id turpis. Vivamus vulputate, diam lacinia pharetra sollicitudin, justo odio accumsan nibh, ac viverra lectus odio quis urna. Donec eget viverra magna. Proin eget dolor sed tellus sodales.',
        amountclasses: 4,
        schedule: 'Lunes de 17:00 a 20:00',
        deleted: false,
        attendance: 0,
        visualized: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        courseName: 'Diseño y reciclaje: luminaria',
        courseStartDate: '2023-08-01',
        courseEndDate: '2023-10-01',
        description: 'Pellentesque consectetur tellus at dolor varius mollis. In et mauris id libero lobortis efficitur sit amet nec nulla. Cras quis nunc et lectus egestas imperdiet. Fusce diam metus, efficitur ut faucibus eget, ullamcorper id tellus. Donec blandit ligula vel malesuada lobortis. Phasellus lacinia, mi scelerisque scelerisque finibus, elit.',
        shortDescription: 'Nulla suscipit, enim non sodales tristique, dolor risus rutrum quam, quis feugiat est urna at nibh. In vel feugiat leo. Fusce ac mattis justo. Donec pulvinar hendrerit elit at maximus. ',
        amountclasses: 4,
        schedule: 'Lunes de 17:00 a 20:00',
        deleted: false,
        attendance: 0,
        visualized: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        courseName: 'Diseño y reciclaje: packaging',
        courseStartDate: '2023-08-01',
        courseEndDate: '2023-10-01',
        description: 'Sed rutrum quis dolor eget commodo. Aliquam pharetra nibh sapien, ut vestibulum ante luctus et. Pellentesque libero nunc, ornare eget feugiat nec, condimentum eu enim. In semper volutpat ex, sed scelerisque libero consectetur sit amet. Cras nibh diam, dapibus ut dolor ac, mollis dignissim lorem. Aliquam tristique libero elit, vel condimentum neque porttitor mattis.',
        shortDescription: 'Mauris ac porttitor turpis. Etiam vehicula ligula sit amet enim egestas volutpat in vehicula dolor. Maecenas libero ex, feugiat eu mauris id, blandit venenatis enim. Curabitur felis massa, faucibus non augue eget, elementum pretium lectus. Vestibulum auctor, mi a pellentesque placerat, nibh turpis eleifend nulla, eget mattis massa erat quis.',
        amountclasses: 4,
        schedule: 'Lunes de 17:00 a 20:00',
        deleted: false,
        attendance: 0,
        visualized: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        courseName: 'Diseño de imagen y video con Canva',
        courseStartDate: '2023-08-01',
        courseEndDate: '2023-10-01',
        description: 'Aliquam varius justo eu urna lacinia posuere eget ut tortor. Vivamus in fermentum ante. Vestibulum ut metus augue. Proin bibendum, nunc vitae ornare viverra, nisi nulla imperdiet elit, a viverra erat tellus vel libero. Etiam suscipit est sem, non rutrum metus feugiat sed. Donec aliquam facilisis felis, nec accumsan est eleifend eu. Nullam pulvinar venenatis erat.',
        shortDescription: 'Aenean commodo volutpat sem, eget feugiat leo iaculis sed. Integer a ante auctor, vestibulum tortor in, eleifend ante. Vivamus convallis metus in vulputate iaculis. Mauris dui ipsum, luctus id dapibus et, pellentesque at magna. Maecenas felis nisl, placerat non accumsan at, suscipit sed lectus. Proin eros mauris, ornare eu mi.',
        amountclasses: 4,
        schedule: 'Lunes de 17:00 a 20:00',
        deleted: false,
        attendance: 0,
        visualized: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Course', null, {});
  },
};
