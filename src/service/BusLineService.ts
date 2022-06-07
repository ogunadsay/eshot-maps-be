import {BusLineRepositoryInterface, BusLineServiceInterface} from "../interface/BusLineInterface";
import {BusLine} from "../entity/BusLine";
import {injected} from "brandi";
import {TOKENS} from '../container/Tokens'

export class BusLineService implements BusLineServiceInterface {

    constructor(private busLineRepository: BusLineRepositoryInterface) {

    }

    async findBusLines(): Promise<BusLine[]> {
        return await this.busLineRepository.findAll()
    }

    async create(busLine: BusLine): Promise<BusLine> {
        try {
            return await this.busLineRepository.create(busLine);
        } catch (e) {
            console.log(e)
        }
    }
}

injected(BusLineService, TOKENS.busLineRepositoryInterface.optional)