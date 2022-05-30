const models = require('../db/models')

const BusLine = models.BusLine;
const BusStop = models.BusStop;
const Stop = models.Stop;


exports.findBusLines = async (req, res) => {
  const allBusLines = await BusLine.findAll()
  if(!allBusLines || allBusLines.length === 0) return res.status(404).send('There are no bus lines')

  res.send(allBusLines)
}

exports.findStops = async (req, res) => {
  const allStops = await Stop.findAll()
  if(!allStops || allStops.length === 0) return res.status(404).send('There are no stops')

  res.send(allStops)
}

exports.findById = async (req, res) => {
  const lineId = req.params.busLineId
  const busLine = await BusLine.findByPk(lineId, {include: ["busLineDetails"]});

  if(!busLine) return res.status(404).send('Bus line not found')

  res.send(busLine)
};

exports.findBusStops = async (req, res) => {
  const busLineId = req.params.busLineId;
  const busStops = await BusStop.findAll(
    {
      where: {
        busLineId: busLineId
      }
    }
  );

  if(!busStops || busStops.length === 0) return res.status(404).send('There are no stops assigned to this line or line is not there')

  res.send(busStops)
}