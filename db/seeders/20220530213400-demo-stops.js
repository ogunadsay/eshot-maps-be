'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stops', [
      {
        "areaCode": "",
        "coordinateX": 38.415268362602,
        "name": "Bahribaba",
        "bussesPassingBy": "15",
        "stopId": 10005,
        "coordinateY": 27.127639527221
      },
      {
        "areaCode": "",
        "coordinateX": 38.415144105211,
        "name": "Bahribaba",
        "bussesPassingBy": "21",
        "stopId": 10007,
        "coordinateY": 27.127720091272
      },
      {
        "areaCode": "",
        "coordinateX": 38.415187195872,
        "name": "Bahribaba",
        "bussesPassingBy": "33",
        "stopId": 10008,
        "coordinateY": 27.127566643393
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stops', null, {});
  }
};
