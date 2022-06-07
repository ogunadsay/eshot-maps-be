import {BusLineDetailServiceInterface, BusLineServiceInterface} from "../interface/BusLineInterface";
import {BaseController} from "./BaseController";
import {BusLine} from "../entity/BusLine";
import {container} from "../container";
import {TOKENS} from "../container/Tokens";
import {BusLineDetail} from "../entity/BusLineDetail";
import {Token, TokenType} from "brandi";

class BusLineController extends BaseController {

    private busLineService: BusLineServiceInterface;
    private busLineDetailService: BusLineDetailServiceInterface

    constructor(busLineService: BusLineServiceInterface, busLineDetailService: BusLineDetailServiceInterface) {
        super()
        this.busLineService = busLineService;
        this.busLineDetailService = busLineDetailService
    }

    private findBusLines = async () => {
        let busLines = await this.busLineService.findBusLines();
        return this.ok(this.res, busLines)
    }

    private create = async () => {
        let busLine = this.body as unknown as BusLine
        let createdBusLine = await this.busLineService.create(busLine);
        return this.created(createdBusLine)
    }

    private createDetail = async () => {
        let busLineDetail = this.body as unknown as BusLineDetail
        let createdBusLineDetail = await this.busLineDetailService.create(busLineDetail);
        return this.created(createdBusLineDetail)
    }

    protected async executeImpl(method): Promise<any> {
        return await this[method]()
    }
}

export default new BusLineController(container.get(TOKENS.busLineServiceInterface), container.get(TOKENS.busLineDetailServiceInterface))