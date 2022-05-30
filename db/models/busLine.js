'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BusLine extends Model {
    static associate(models) {
      BusLine.hasMany(models.BusLineDetail, {as: 'busLineDetails'})
      BusLine.hasMany(models.BusRoute, {as: 'busRoutes'})
      BusLine.hasMany(models.BusStop, {as: 'busStops'})
    }
  }

  BusLine.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    lineHimId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    lineEnd: DataTypes.STRING,
    lineStart: DataTypes.STRING,
    tariff: DataTypes.STRING,
    workingHoursDeparture: DataTypes.STRING,
    workingHoursReturn: DataTypes.STRING,
    lineDescription: DataTypes.STRING,
    lineNo: DataTypes.INTEGER,
    lineName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BusLine'
  });
  return BusLine;
};