const express = require('express');
const router = express.Router();

const {
  findById,
  findBusLines,
  findBusStops,
  findStops
} = require('../controllers/busLine.controller')

router.get('/busLines', findBusLines)
router.get('/stops', findStops)
router.get('/:busLineId', findById)
router.get('/:busLineId/stops', findBusStops)

module.exports = router;