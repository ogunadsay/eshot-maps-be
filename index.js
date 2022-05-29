const express = require('express')
const app = express()
const port = 3000

const busLineRouter = require('./routes/busLine.router')

app.use('/busLine', busLineRouter)

app.use(express.json())

// app health check
app.get('/', (req, res) => {
    res.json({message:'OK'})
})




// start the app
app.listen(port, () => {
    console.log('app started')
})

