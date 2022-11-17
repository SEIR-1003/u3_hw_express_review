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

const creatures = [
    {
        name: "Ballista Squad",
		manaCost: "{3}{W}",
		cmc: 4.0,
		colors: [				"W"			],
		colorIdentity: [				"W"			],
		type: "Creature — Human Rebel",
		text: "{X}{W}, {T}: Ballista Squad deals X damage to target attacking or blocking creature.",
		flavor: "The perfect antidote for a tightly packed formation.",
    },
    {
        name: "Aven Cloudchaser",
		manaCost: "{3}{W}",
		cmc: 4.0,
		colors: [				"W"			],
		colorIdentity: [				"W"			],
		type: "Creature — Bird Soldier",
        text: "Flying (This creature can't be blocked except by creatures with flying or reach.)\nWhen Aven Cloudchaser enters the battlefield, destroy target enchantment.",
        flavor:null
    },
    {
        name: "Angelic Wall",
		manaCost: "{1}{W}",
		cmc: 2.0,
		colors: [				"W"			],
		colorIdentity: [				"W"			],
		type: "Creature — Wall",
        text: "Defender (This creature can't attack.)\nFlying",
		flavor: "\"The Ancestor protects us in ways we can't begin to comprehend.\"\n—Mystic elder",
    },
    {
        name: "Angel of Mercy",
		manaCost: "{4}{W}",
		cmc: 5.0,
		colors: [				"W"			],
		colorIdentity: [			"W"			],
		type: "Creature — Angel",
        text: "Flying\nWhen Angel of Mercy enters the battlefield, you gain 3 life.",
		flavor: "Every tear shed is a drop of immortality.",
    },
    {
        name: "Ancestor's Chosen",
		manaCost: "{5}{W}{W}",
		cmc: 7.0,
		colors:       [				"W"			],
		colorIdentity: [				"W"			],
		type: "Creature — Human Cleric",
        text: "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.",
		flavor: "The will of all, by my hand done."
    }
]

module.exports={
    creatures,
    artifacts
}