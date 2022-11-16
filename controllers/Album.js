const express = require("express")

const getAlbum = (req, res) => {
  res.send([
    {
      id: 7,
      name: "Revolver",
      artistName: "The Beatles",
      description:
        "Revolver is the seventh studio album by the English rock band the Beatles",
      releaseDate: "August 5, 1966",
      numberOfTracks: 14,
    },
  ])
}

module.exports = {
  getAlbum,
}
