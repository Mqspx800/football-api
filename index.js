const express = require('express')
const teamRouter = require('./team/router')
const playerRouter = require('./Player/router')
const bodyParser = require('body-parser')
const app = express()
port = 4000

const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)

app.listen(port,()=>console.log(`Server is listening on port ${port}`))