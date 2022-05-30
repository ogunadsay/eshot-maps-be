'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stopId: {
        unique: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      areaCode: Sequelize.STRING,
      name: Sequelize.STRING,
      coordinateX: Sequelize.DECIMAL(15,13),
      coordinateY: Sequelize.DECIMAL(15,13),
      bussesPassingBy: Sequelize.STRING
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Stops")
  }
};
