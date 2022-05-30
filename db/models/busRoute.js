'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class BusRoute extends Model {
    static associate(models) {
      BusRoute.belongsTo(models.BusLine, {foreignKey: 'busLineId', as: 'busLine'})
    }
  }

  BusRoute.init({
    busLineId: DataTypes.INTEGER,
    direction: DataTypes.INTEGER,
    coordinateX: DataTypes.DECIMAL(9, 7),
    coordinateY: DataTypes.DECIMAL(9, 7)
  }, {
    sequelize,
    modelName: 'BusRoute',
  });
  return BusRoute;
};