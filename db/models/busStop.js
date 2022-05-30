'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BusStop extends Model {
    static associate(models) {
      BusStop.belongsTo(models.Stop, {foreignKey: 'stopId', as: 'stop'})
    }
  }

  BusStop.init({
    stopId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    coordinateX: DataTypes.DECIMAL,
    coordinateY: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'BusStop'
  });
  return BusStop;
};