'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BusStops', [
      {
        "coordinateX": 38.49504,
        "name": "Evka 4 Son Durak",
        "stopId": 10005,
        "coordinateY": 27.21397,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "coordinateX": 38.4936,
        "name": "Evka-4 Anaokulu",
        "stopId": 10007,
        "coordinateY": 27.2128,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "coordinateX": 38.4919,
        "name": "Mehmet Akif Cami",
        "stopId": 10008,
        "coordinateY": 27.2137,
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BusStops', null, {});
  }
};
