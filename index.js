const express = require('express');
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001;
const cardController = require('./controllers/CardController.js')
const cardController2 = require('./controllers/CardController2.js')



const app = express();
app.use(cors())
app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('home page');
  })

  app.get('/carddata', cardController.getCards)
  app.get('/carddata2', cardController2.getCards2)



app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
  })