const models = require('../db/models')

const BusLine = models.BusLine;

exports.findById = (lineId) => {
  return BusLine.findByPk(lineId, {include: ["busLineDetails"]})
    .then(busLine => busLine)
    .catch((err) => console.log(">> Error while finding busline: ", err));
};