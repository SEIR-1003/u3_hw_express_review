const express = require("express");

const getWeapons = (req, res) => {
    res.send(
        [
            {
                id: 1,
                name: "Vandal",
                category: "primary",
                type: "heavy",
                displayIcon: "https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png"
            }
        ]
    )
}

module.exports = {
    getWeapons
}