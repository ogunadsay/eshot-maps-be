'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BusLines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lineId: {
        type: Sequelize.INTEGER
      },
      lineHimId: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      lineEnd: {
        type: Sequelize.STRING
      },
      lineStart: {
        type: Sequelize.STRING
      },
      tariff: {
        type: Sequelize.STRING
      },
      workingHoursDeparture: {
        type: Sequelize.STRING
      },
      workingHoursReturn: {
        type: Sequelize.STRING
      },
      lineDescription: {
        type: Sequelize.STRING
      },
      lineNo: {
        type: Sequelize.INTEGER
      },
      lineName: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('BusLines');
  }
};