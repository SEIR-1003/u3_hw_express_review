const express = require("express")
// const logger = require("morgan")
// const cors = require("cors")
const artist = require("./controllers/Game")
const album = require("./controllers/Character")
const PORT = 3001

const app = express()

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(logger("dev"))

//
app.get("/", (request, response) => {
  response.send({ msg: "Mock Game api is Running" })
})

//
app.get("/ping", (req, res) => {
  res.json("pong")
})

app.get("/Game", artist.getGame)
app.get("/Character", album.getCharacter)

app.listen(PORT, () => console.log(`Mock Game API is running on ${PORT}!`))