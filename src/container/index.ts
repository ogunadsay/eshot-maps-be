import {Container} from "brandi";
import {TOKENS} from './Tokens'
import {BusLineService} from "../service/BusLineService";
import {BusLineRepository} from "../repository/BusLineRepository";
import {BusLineDetailService} from "../service/BusLineDetailService";
import {BusLineDetailRepository} from "../repository/BusLineDetailRepository";


export const container = new Container()

container
    .bind(TOKENS.busLineServiceInterface)
    .toInstance(BusLineService)
    .inTransientScope()

container
    .bind(TOKENS.busLineRepositoryInterface)
    .toInstance(BusLineRepository)
    .inTransientScope()

container
    .bind(TOKENS.busLineDetailServiceInterface)
    .toInstance(BusLineDetailService)
    .inTransientScope()
container
    .bind(TOKENS.busLineDetailRepositoryInterface)
    .toInstance(BusLineDetailRepository)
    .inTransientScope()