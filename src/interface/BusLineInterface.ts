import {BusLine} from "../entity/BusLine";
import {BusLineDetail} from "../entity/BusLineDetail";

export interface BusLineServiceInterface {
    findBusLines(): Promise<BusLine[]>
    create(busLine: BusLine): Promise<BusLine>;
}

export interface BusLineDetailServiceInterface {
    create(busLineDetail: BusLineDetail): Promise<BusLineDetail>
}

export interface BusLineRepositoryInterface {
    findAll(): Promise<BusLine[]>
    create(busLine: BusLine): Promise<BusLine>;
}

export interface BusLineDetailRepositoryInterface {
    create(busLineDetail): Promise<BusLineDetail>
}