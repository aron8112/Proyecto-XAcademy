/* eslint-disable no-unused-vars */
const crypto = require('crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Publication', [
      {
        id: crypto.randomUUID(),
        title: 'Aprende el Arte de la Acupuntura en Cruz del Eje',
        description: '¡Te invitamos a descubrir el antiguo arte de la acupuntura en nuestras instalaciones de la Incubadora del NOC en Mitre 757, Cruz del Eje, en el Noroeste de la provincia de Córdoba! Este curso introductorio te sumergirá en los fundamentos de la acupuntura, enseñándote las técnicas y beneficios esenciales de esta práctica milenaria. Únete a nosotros para aprender cómo aliviar el estrés y promover la salud a través de la acupuntura.',
        image: 'imagenURL',
        start_date: '2023-08-01',
        finish_date: '2023-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        title: 'Avanza en la Acupuntura',
        description: 'Si deseas llevar tus conocimientos de acupuntura al siguiente nivel, te invitamos a nuestro curso de Acupuntura Nivel 2. En este curso, profundizarás en las técnicas avanzadas de la acupuntura y ampliarás tus habilidades para abordar una variedad de problemas de salud. Descubre cómo la acupuntura puede ser aún más eficaz en la promoción del bienestar.',
        image: 'imagenURL',
        start_date: '2023-09-04',
        finish_date: '2023-09-04',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        title: 'Maquillaje Semipermanente en Cruz del Eje',
        description: '¿Quieres experimentar la belleza duradera? Te invitamos a nuestro taller de Maquillaje Semipermanente en la Incubadora del NOC en Mitre 757, Cruz del Eje, en el Noroeste de la provincia de Córdoba. Aprende a aplicar maquillaje que perdura durante semanas, realzando tu aspecto sin esfuerzo. En este curso, te sumergirás en las técnicas de aplicación y cuidado del maquillaje semipermanente, permitiéndote lucir impecable durante más tiempo.',
        image: 'imagenURL',
        start_date: '2023-08-01',
        finish_date: '2023-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        title: 'Diseña Luminarias Sostenibles',
        description: 'Unite a nuestro taller de Diseño y Reciclaje de Luminarias en la Incubadora del NOC en Mitre 757, Cruz del Eje, en el Noroeste de la provincia de Córdoba. Descubre cómo transformar objetos cotidianos en hermosas lámparas y luces decorativas, todo ello mientras promovemos la sostenibilidad. Aprenderás a reutilizar materiales de manera creativa y a iluminar tu hogar con estilo, al mismo tiempo que contribuís al cuidado del planeta.',
        image: 'imagenURL',
        start_date: '2023-08-01',
        finish_date: '2023-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        title: 'Diseño de Packaging Ecológico',
        description: 'En nuestras instalaciones de la Incubadora del NOC en Mitre 757, Cruz del Eje, en el Noroeste de la provincia de Córdoba, te invitamos a explorar el mundo del diseño de packaging ecológico. Aprenderás a crear envases innovadores y amigables con el medio ambiente utilizando materiales reciclados. Este curso te brindará las habilidades necesarias para combinar diseño gráfico y sostenibilidad, creando soluciones de packaging respetuosas con el planeta.',
        image: 'imagenURL',
        start_date: '2023-08-01',
        finish_date: '2023-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        title: 'Domina Canva para el Diseño',
        description: 'En la Incubadora del NOC en Mitre 757, Cruz del Eje, en el Noroeste de la provincia de Córdoba, te ofrecemos la oportunidad de dominar Canva en nuestro curso de Diseño de Imagen y Video. Aprende a crear imágenes y videos atractivos de manera sencilla y efectiva utilizando esta popular herramienta. Descubre cómo llevar tus proyectos visuales al siguiente nivel con Canva.',
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
