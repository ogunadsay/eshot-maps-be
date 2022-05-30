'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('BusStops', 'busLineId', {
      type: Sequelize.DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'BusLines',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('BusStops', 'busLineId');
  }
};
