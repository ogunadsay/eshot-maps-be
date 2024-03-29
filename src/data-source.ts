import "reflect-metadata"
import {DataSource} from "typeorm"
import {BusLine} from "./entity/BusLine";
import {BusLineDetail} from "./entity/BusLineDetail";
import {BusRoute} from "./entity/BusRoute";
import {BusStop} from "./entity/BusStop";
import {Stop} from "./entity/Stop";


require('dotenv').config()


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [BusLine, BusLineDetail, BusRoute, BusStop, Stop],
    migrations: [],
    subscribers: [],
})
