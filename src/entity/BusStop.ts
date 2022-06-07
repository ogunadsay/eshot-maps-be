import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {BusLine} from "./BusLine";
import {Stop} from "./Stop";

@Entity()
export class BusStop {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column('decimal', {precision: 9, scale:7})
  coordinateX: number

  @Column('decimal', {precision: 9, scale:7})
  coordinateY: number

  @Column({nullable: true})
  busLineId:number

  @ManyToOne(() => BusLine, busLine => busLine.busStops)
  @JoinColumn({name: 'busLineId'})
  busLine: BusLine

  @Column({nullable: true})
  stopId:number

  @ManyToOne(() => Stop, stop => stop.busStops)
  @JoinColumn({name: 'stopId'})
  stop: Stop
}