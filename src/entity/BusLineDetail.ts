import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {BusLine} from "./BusLine";

@Entity()
export class BusLineDetail {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    timeOfTheWeek: string

    @Column()
    departureTime: string

    @Column()
    bikeSupportedDeparture: boolean

    @Column()
    doubleDisabledSupportedReturn: boolean

    @Column()
    disabledSupportedReturn: boolean

    @Column()
    isElectricalReturn: boolean

    @Column()
    bikeSupportedReturn: boolean

    @Column()
    tariffId: number

    @Column()
    returnTime: string

    @Column()
    isElectricalDeparture: boolean

    @Column()
    disabledSupportedDeparture: boolean

    @Column()
    doubleDisabledSupportedDeparture: boolean

    @Column({nullable: true})
    busLineId: number

    @ManyToOne(() => BusLine, busLine => busLine.busLineDetails)
    @JoinColumn({ name: "busLineId" })
    busLine: BusLine
}