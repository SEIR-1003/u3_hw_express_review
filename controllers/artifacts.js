const artifacts=[
    {
        name: "Angel's Feather",
        manaCost: "{2}",
        cmc: 2.0,
        type: "Artifact",
        text: "Whenever a player casts a white spell, you may gain 1 life.",
        flavor: "If taken, it cuts the hand that clutches it. If given, it heals the hand that holds it."
    },
    {
        name: "Bottle Gnomes",
		manaCost: "{3}",
		cmc: 3.0,
		type: "Artifact Creature — Gnome",
        text: "Sacrifice Bottle Gnomes: You gain 3 life.",
		flavor: "Reinforcements . . . or refreshments?",
    },
    {
        name: "Chimeric Staff",
		manaCost: "{4}",
		cmc: 4.0,
		type: "Artifact",
        text: "{X}: Chimeric Staff becomes an X/X Construct artifact creature until end of turn.",
		flavor: "The staff unraveled in a chaotic chorus of clanging, becoming an improbable beast of hissing blades.",
    },
    {
        name: "Chromatic Star",
		manaCost: "{1}",
		cmc: 1.0,
		type: "Artifact",
        text: "{1}, {T}, Sacrifice Chromatic Star: Add one mana of any color.\nWhen Chromatic Star is put into a graveyard from the battlefield, draw a card.",
        flavor: null
    },
    {
        name: "Citanul Flute",
		manaCost: "{5}",
		"cmc": 5.0,
		type: "Artifact",
        text: "{X}, {T}: Search your library for a creature card with mana value X or less, reveal it, put it into your hand, then shuffle.",
		flavor: "Each note of the flute mimics the call of a different beast.",
    }
]
module.exports = artifacts