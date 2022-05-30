'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BusLines', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lineHimId: {
        type: Sequelize.INTEGER
      },
      lineNo: {
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