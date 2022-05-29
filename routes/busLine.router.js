const express = require('express');
const router = express.Router();

const {findById, getAll} = require('../controllers/busLine.controller')

router.get('/', function (req, res, next) {
  res.send('API is working properly');
});

router.get('/getAll', getAll)
router.get('/:lineId', findById)

module.exports = router;