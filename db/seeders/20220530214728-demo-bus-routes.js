'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BusRoutes', [
      {
        'busLineId': 1,
        'direction':1,
        "coordinateY": "38.495029",
        "coordinateX": "27.214438"
      },
      {
        'busLineId': 1,
        'direction':1,
        "coordinateY": "38.494974",
        "coordinateX": "27.214317"
      },
      {
        'busLineId': 1,
        'direction':1,
        "coordinateY": "38.494974",
        "coordinateX": "27.214317"
      },
      {
        'busLineId': 2,
        'direction':2,
        "coordinateY": "38.494986",
        "coordinateX": "27.214214"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BusRoutes', null, {});
  }
};
