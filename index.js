const express = require("express")
// const logger = require("morgan")
// const cors = require("cors")
const artist = require("./controllers/Artist")
const album = require("./controllers/Album")
const PORT = 3001

const app = express()

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(logger("dev"))

//
app.get("/", (request, response) => {
  response.send({ msg: "Mock music api is Running" })
})

//
app.get("/ping", (req, res) => {
  res.json("pong")
})

app.get("/artist", artist.getArtist)
app.get("/album", album.getAlbum)

app.listen(PORT, () => console.log(`Mock music api is running on ${PORT}!`))
