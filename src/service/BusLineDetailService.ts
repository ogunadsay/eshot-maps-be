import {BusLineDetailRepositoryInterface, BusLineDetailServiceInterface} from "../interface/BusLineInterface";
import {BusLineDetail} from "../entity/BusLineDetail";
import {injected} from "brandi";
import {TOKENS} from "../container/Tokens";

export class BusLineDetailService implements BusLineDetailServiceInterface {

    constructor(private busLineDetailRepository: BusLineDetailRepositoryInterface) {
    }

    async create(busLineDetail: BusLineDetail): Promise<BusLineDetail> {
        return await this.busLineDetailRepository.create(busLineDetail)
    }

}

injected(BusLineDetailService, TOKENS.busLineDetailRepositoryInterface.optional)