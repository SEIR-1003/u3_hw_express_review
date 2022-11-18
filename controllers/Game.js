const express = require("express")

const getGame = (req, res) => {
  res.send([
    {
      id: 7,
      name: "Halo 3",
      developer: "Bungie",
      description:
        "Halo 3 is a traditional first-person shooter, with a well-designed game world and mythology. The series is known for its multiplayer, which many consider the best in the genre. Matches can fit up to 16 people, who fight in several game modes. They are a variation on the Deathmatch and Capture the Flag modes. In addition to multiplayer battles, players can go through the campaign together with 3 friends in a cooperative mode.",
      releaseDate: "Sep 25., 2007",
      Metascore: 91
    },
  ])
}

module.exports = {
  getGame,
}