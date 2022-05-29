const models = require('../db/models')

const BusLine = models.BusLine;

exports.findById = async (req, res) => {
  const lineId = req.params.lineId
  const busLine = await BusLine.findByPk(lineId, {include: ["busLineDetails"]});

  if(!busLine) return res.status(404).send('Bus line not found')

  res.send(busLine)
};

exports.getAll = async (req, res) => {
  const allBusLines = await BusLine.findAll()
  if(!allBusLines || allBusLines.length === 0) return res.status(404).send('There are no bus lines')

  res.send(allBusLines)
}