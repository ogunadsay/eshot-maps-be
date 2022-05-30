'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BusRoutes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      busLineId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'BusLines',
          key: 'id'
        }
      },
      direction: Sequelize.INTEGER,
      coordinateX: Sequelize.DECIMAL(9, 7),
      coordinateY: Sequelize.DECIMAL(9, 7)
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BusRoutes');
  }
};
