'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stops', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      areaCode: Sequelize.STRING,
      name: Sequelize.STRING,
      coordinateX: Sequelize.DECIMAL(15,13),
      coordinateY: Sequelize.DECIMAL(15,13),
      bussesPassingBy: Sequelize.STRING,
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
    await queryInterface.dropTable("Stops")
  }
};
