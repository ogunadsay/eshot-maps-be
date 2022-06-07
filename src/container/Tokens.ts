import {token} from 'brandi'
import {
    BusLineServiceInterface,
    BusLineRepositoryInterface,
    BusLineDetailServiceInterface,
    BusLineDetailRepositoryInterface
} from "../interface/BusLineInterface";

export const TOKENS = {
    busLineServiceInterface: token<BusLineServiceInterface>('busLineServiceInterface'),
    busLineRepositoryInterface: token<BusLineRepositoryInterface>('busLineRepositoryInterface'),
    busLineDetailServiceInterface: token<BusLineDetailServiceInterface>('busLineDetailServiceInterface'),
    busLineDetailRepositoryInterface: token<BusLineDetailRepositoryInterface>('busLineDetailRepositoryInterface')
}