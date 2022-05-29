'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BusLineDetails', {
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
      timeOfTheWeek: {
        type: Sequelize.STRING
      },
      departureTime: {
        type: Sequelize.STRING
      },
      bikeSupportedDeparture: {
        type: Sequelize.BOOLEAN
      },
      doubleDisabledSupportedReturn: {
        type: Sequelize.BOOLEAN
      },
      disabledSupportedReturn: {
        type: Sequelize.BOOLEAN
      },
      isElectricalReturn: {
        type: Sequelize.BOOLEAN
      },
      bikeSupportedReturn: {
        type: Sequelize.BOOLEAN
      },
      tariffId: {
        type: Sequelize.INTEGER
      },
      returnTime: {
        type: Sequelize.STRING
      },
      isElectricalDeparture: {
        type: Sequelize.BOOLEAN
      },
      disabledSupportedDeparture: {
        type: Sequelize.BOOLEAN
      },
      doubleDisabledSupportedDeparture: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BusLineDetails');
  }
};