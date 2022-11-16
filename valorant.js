const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const agents = require('./controllers/Agents')
const weapons = require('./controllers/Weapons')
const PORT = 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send({msg: `Valorant API V2 is Running!`})
})

app.get('/agents', agents.getAgents)
app.get('/weapons', weapons.getWeapons)

app.listen(PORT, () => console.log(`Valorant API V2 is running on ${PORT}!`))