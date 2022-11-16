const getCards2=(req,res)=>{
    res.send([
        {cardName:'Man Eater Bug', set: 'dark beginning 1', img: 'placeholder link', price: .48, cardSetNumber: 'db109', imgSmall:'placeholder2'}, {cardName:'Blue Eyes White Dragon', set: '2016 Megatin', img: 'placeholder link', price: .67, cardSetNumber: 'MT09', imgSmall:'placeholder2'},
        {cardName:'Blood Mefist', set: 'Yu-Gi-Oh! Championship Series 2011 Prize Card', img: 'placeholder link', price: 999.99, cardSetNumber: 'YCSW-EN004', imgSmall:'placeholder2'}
    ]
       )
}



module.exports={
    getCards2
}