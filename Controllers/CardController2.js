const getCards2=(req,res)=>{
    res.send([
        {cardSetName:'Dark Beginning 1', setPrice: '5.00', img: 'placeholder link', cardsInSet: ['Man-eater Bug','Magician of Faith','Witch of the Black Forest'], cardSetID: 'DB1', imgSmall:'placeholder2 link'}, {cardSetName:'Dark Beginning 2', setPrice: '5.00', img: 'placeholder link', cardsInSet: ['Obnoxious Celtic Guardian','Sangan','Dark Magician '], cardSetID: 'DB2', imgSmall:'placeholder2 link'}, {cardSetName:'Legend of the Blue Eyes White Dragon', setPrice: '5.00', img: 'placeholder link', cardsInSet: ['Man-eater Bug','Exodia the Forbidden One','Spark'], cardSetID: 'LOB', imgSmall:'placeholder2'}, 
    ]
       )
}



module.exports={
    getCards2
}