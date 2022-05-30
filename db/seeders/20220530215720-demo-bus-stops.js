'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BusStops', [
      {
        "coordinateX": 38.49504,
        "name": "Evka 4 Son Durak",
        "stopId": 1,
        "coordinateY": 27.21397
      },
      {
        "coordinateX": 38.4936,
        "name": "Evka-4 Anaokulu",
        "stopId": 1,
        "coordinateY": 27.2128
      },
      {
        "coordinateX": 38.4919,
        "name": "Mehmet Akif Cami",
        "stopId": 2,
        "coordinateY": 27.2137
      },
      {
        "coordinateX": 38.4903,
        "name": "Evka 4 Muhtarlık",
        "stopId": 3,
        "coordinateY": 27.2149
      },
      {
        "coordinateX": 38.48832,
        "name": "Yeditepe İtfaiye",
        "stopId": 3,
        "coordinateY": 27.21429
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BusStops', null, {});
  }
};
