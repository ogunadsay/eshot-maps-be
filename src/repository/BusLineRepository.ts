import {AppDataSource} from "../data-source";
import {BusLine} from "../entity/BusLine";
import {Repository} from "typeorm";
import {BusLineRepositoryInterface} from "../interface/BusLineInterface";


export class BusLineRepository implements BusLineRepositoryInterface {

    private repository: Repository<BusLine>

    constructor() {
        this.repository = AppDataSource.getRepository(BusLine);
    }

    async findAll(): Promise<BusLine[]> {
        return await this.repository.find()
    }

    async create(busLine: BusLine): Promise<BusLine> {
        return await this.repository.save(busLine)
    }
}