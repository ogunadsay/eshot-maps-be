'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BusRoutes', [
      {
        'busLineId': 5,
        'direction':1,
        "coordinateY": "38.495029",
        "coordinateX": "27.214438",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        'busLineId': 5,
        'direction':1,
        "coordinateY": "38.494974",
        "coordinateX": "27.214317",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        'busLineId': 6,
        'direction':1,
        "coordinateY": "38.494974",
        "coordinateX": "27.214317",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        'busLineId': 7,
        'direction':2,
        "coordinateY": "38.494986",
        "coordinateX": "27.214214",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BusRoutes', null, {});
  }
};
