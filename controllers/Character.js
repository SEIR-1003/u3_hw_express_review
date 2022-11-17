const express = require("express")

const getCharacter = (req, res) => {
  res.send([
    {
      id: 1,
      name: "Master Chief",
      description: "The Master Chief is a towering supersoldier known as a Spartan, raised and trained from childhood for combat. He is almost faceless and rarely seen without his green-colored armor and helmet. He is commonly referred to by his naval rank rather than his given birth name.",
      height: "6 feet 10 inches",
      createdBy: "Bungie"
    },
  ])
}

module.exports = {
  getCharacter,
}