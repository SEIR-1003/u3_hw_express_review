const express = require('express');
const logger = require('morgan')
const cors = require('cors')
const PORT = 3001
const cocktails = require('./controllers/Cocktails');
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))


app.get('/ping', (req, res) => {
    res.json('pong');
  })

// app.get('/cocktails', cocktails.getDrinks)  

app.get('/cocktails', (req, res) => {
  res.send(cocktails);
})



app.listen(PORT, () => console.log(`working on ${PORT}`))

