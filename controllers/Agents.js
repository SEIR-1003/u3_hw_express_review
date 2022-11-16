const express = require("express");

const getAgents = (req, res) => {
    res.send(
        [
            {
                id: 1,
                name: "FADE",
                devName: "BountyHunter",
                description: "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",
                fullPortrait: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png"
            }
        ]
    )
}

module.exports = {
    getAgents
}