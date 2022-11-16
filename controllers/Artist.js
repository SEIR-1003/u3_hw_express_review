const express = require("express")

const getArtist = (req, res) => {
  res.send([
    {
      id: 1,
      name: "The Beatles",
      description: "The Beatles are a rock group from Liverpool",
      genre: "Rock",
      yearFormed: 1962,
    },
  ])
}

module.exports = {
  getArtist,
}
