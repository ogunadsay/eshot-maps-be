import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {BusStop} from "./BusStop";

@Entity()
export class Stop {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  areaCode: string

  @Column()
  name: string

  @Column('decimal', {precision: 15, scale:13})
  coordinateX: number

  @Column('decimal', {precision: 15, scale:13})
  coordinateY: number

  @Column()
  bussesPassingBy: string

  @OneToMany(() => BusStop, busStop => busStop.stop, {cascade:true})
  busStops: BusStop[]
}