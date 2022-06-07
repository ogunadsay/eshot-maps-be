import {BusLineDetailRepositoryInterface} from "../interface/BusLineInterface";
import {BusLineDetail} from "../entity/BusLineDetail";
import {AppDataSource} from "../data-source";
import {Repository} from "typeorm";

export class BusLineDetailRepository implements BusLineDetailRepositoryInterface {

    private repository: Repository<BusLineDetail>

    constructor() {
        this.repository = AppDataSource.getRepository(BusLineDetail)
    }

    async create(busLineDetail): Promise<BusLineDetail> {
        return await this.repository.save(busLineDetail)
    }

}