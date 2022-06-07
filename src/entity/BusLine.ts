import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {BusLineDetail} from "./BusLineDetail";
import {BusRoute} from "./BusRoute";
import {BusStop} from "./BusStop";

@Entity()
export class BusLine {
    @PrimaryColumn()
    id: number

    @Column()
    lineHimId: number

    @Column({length: 100})
    description: string

    @Column({length: 50})
    lineEnd: string

    @Column({length: 50})
    lineStart: string

    @Column({length: 1})
    tariff: string

    @Column()
    workingHoursDeparture: string

    @Column()
    workingHoursReturn: string

    @Column({length: 100})
    lineDescription: string

    @Column()
    lineNo: number

    @Column()
    lineName: string

    @OneToMany(() => BusLineDetail, busLineDetail => busLineDetail.busLine, {cascade: true})
    busLineDetails: BusLineDetail[]

    @OneToMany(() => BusRoute, busRoute => busRoute.busLine, {cascade: true})
    busRoutes: BusRoute[]

    @OneToMany(() => BusStop, busStop => busStop.busLine, {cascade: true})
    busStops: BusStop[]
}