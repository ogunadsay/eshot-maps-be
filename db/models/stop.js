'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stop extends Model {
    static associate(models) {
      Stop.hasMany(models.BusStop, {as: 'busStops'})
    }
  }

  Stop.init({
    id: DataTypes.INTEGER,
    areaCode: DataTypes.STRING,
    name: DataTypes.STRING,
    coordinateX: DataTypes.DECIMAL(15,13),
    coordinateY: DataTypes.DECIMAL(15,13),
    bussesPassingBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stop'
  });
  return Stop;
};