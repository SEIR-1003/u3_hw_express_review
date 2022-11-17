const express = require('express')
const database = require('./controllers/database')
const artifacts = require('./controllers/artifacts')
const cors = require(`cors`)
const PORT=process.env.PORT ||3001

const app = express()

app.get('/', (req,res)=>{
    res.send("You're awake?")
})
app.get('/creatures', (req,res)=>{
    let arr = database.creatures
    res.send(arr)
})
app.get('/artifacts',(req,res)=>{
    res.send(database.artifacts)
})
app.get('/cost/:value',(req,res)=>{
    let n = `${req.params.value}`
    let results = (database.artifacts.find((x)=>x.cmc==n) && database.creatures.find((x)=>x.cmc==n) )
    res.send(results)
})
console.log()
app.listen(PORT, ()=> console.log(`It's up an runnning on port ${PORT}`))