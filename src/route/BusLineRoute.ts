import * as express from "express";
import busLineController from "../controller/BusLineController";

const busLineRouter = express.Router()

busLineRouter.get('/busLine', (req, res) => busLineController.execute(req, res, 'findBusLines'))
busLineRouter.post('/busLine/create', (req, res) => busLineController.execute(req, res, 'create'))
busLineRouter.post('/busLineDetail/create', (req, res) => busLineController.execute(req, res, 'createDetail'))

export {busLineRouter}