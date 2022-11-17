const express = require('express');
const brewdb = require('./brewdb');
const cors = require(`cors`)

const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors())
//new

app.get(`/`, (req, res) => {
    res.send(`home`)
})

app.get(`/breweries`, (req, res) => {
    res.send(brewdb.breweries)
})

app.get(`/brewery/:brId`, (req, res) => {
    let brewery = brewdb.breweries.find((element) => element.brewId === parseInt(req.params.brId))
    res.send(brewery)
})

app.get(`/locations/by_city`, (req, res) => {
    let response = brewdb.locations.filter((element) => element.city === req.query.city)
    res.send(response)
})


app.listen(PORT, () => console.log(`app running on port ${PORT}`))