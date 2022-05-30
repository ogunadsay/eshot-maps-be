'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BusStops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stopId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Stops',
          key: 'id'
        }
      },
      name: Sequelize.STRING,
      coordinateX: Sequelize.DECIMAL(8, 6),
      coordinateY: Sequelize.DECIMAL(8, 6)
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BusStops');
  }
};
