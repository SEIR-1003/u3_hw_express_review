const getCards=(req,res)=>{
    res.send([
        {cardName:'Man Eater Bug', type: 'insect', attribute: 'earth', stars: 2, cardText: 'FLIP: Target 1 monster on the field; destroy it.'}, {cardName:'Blue Eyes White Dragon', type: 'dragon', attribute: 'light', stars: 8, cardText: 'This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.'},
        {cardName:'Blood Mefist', type: 'fiend', attribute: 'dark', stars: 8, cardText: '1 Tuner + 1 or more non-Tuner monsters Once per turn, during your opponent`s Standby Phase: You can inflict 300 damage to your opponent for each card your opponent controls. Each time your opponent Sets a Spell or Trap Card(s): Inflict 300 damage to your opponent.'}
    ]
       )
}



module.exports={
    getCards
}