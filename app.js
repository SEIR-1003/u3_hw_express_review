const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const catController = require('./controllers/CatController')
const dogController = require('./controllers/DogController')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (request, response)=>{
    response.send("Landing Page")
})

app.get('/cats', catController.getPets)
app.get('/cats/age', catController.getAge)

app.get('/dogs', dogController.getPets)
app.get('/dogs/age', dogController.getAge)
//repeat for each of the data points

app.listen(PORT, () => console.log(`Server running on ${PORT}`))