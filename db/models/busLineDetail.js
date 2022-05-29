'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class BusLineDetail extends Model {
    static associate(models) {
      BusLineDetail.belongsTo(models.BusLine, {foreignKey: 'busLineId', as: 'busLine'})
    }
  }

  BusLineDetail.init({
    busLineId: DataTypes.INTEGER,
    timeOfTheWeek: DataTypes.STRING,
    departureTime: DataTypes.STRING,
    bikeSupportedDeparture: DataTypes.BOOLEAN,
    doubleDisabledSupportedReturn: DataTypes.BOOLEAN,
    disabledSupportedReturn: DataTypes.BOOLEAN,
    isElectricalReturn: DataTypes.BOOLEAN,
    bikeSupportedReturn: DataTypes.BOOLEAN,
    tariffId: DataTypes.INTEGER,
    returnTime: DataTypes.STRING,
    isElectricalDeparture: DataTypes.BOOLEAN,
    disabledSupportedDeparture: DataTypes.BOOLEAN,
    doubleDisabledSupportedDeparture: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'BusLineDetail',
  });
  return BusLineDetail;
};