const express = require('express');
const router = express.Router();

const controller = require('../controllers/busLine.controller')

router.get('/', function (req, res, next) {
  res.send('API is working properly');
});

router.get('/:lineId', async (req, res) => {
  let all = await controller.findById(req.params.lineId);
  res.send(all)
})

module.exports = router;