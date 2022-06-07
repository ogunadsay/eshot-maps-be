import * as express from "express";
import { AppDataSource } from "./data-source"
import {busLineRouter} from "./route/BusLineRoute";


const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
    res.json({message:'OK'})
})

app.use('/', busLineRouter)

app.listen(port, () => {
    console.log('app started')
})

AppDataSource.initialize().then(async () => {
    console.log('db successfully initialized')
}).catch(error => console.log(error))
