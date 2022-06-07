import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {BusLine} from "./BusLine";

@Entity()
export class BusRoute {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    direction: number

    @Column("decimal", {precision: 9, scale: 7})
    coordinateX: number

    @Column("decimal", {precision: 9, scale: 7})
    coordinateY: number

    @Column({nullable: true})
    busLineId:number

    @ManyToOne(() => BusLine, busLine => busLine.busRoutes)
    @JoinColumn({name: 'busLineId'})
    busLine: BusLine
}