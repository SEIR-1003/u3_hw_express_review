const express = require('express');
const amiibos = require('./amiibo');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
    res.send({MSG: "server is running :-)"})
})

app.get('/amiibos', (req, res) => {
    res.send(amiibos)
}) 

app.get('/amiibos/:id', (req, res) => {
    // this helped me filter the data it makes no sense however and at the end tried making it equal to req.params.id and it worked so :-b 
    //link: https://www.folkstalk.com/2022/07/how-to-filter-array-objesct-in-express-node-js-with-code-examples-3.html
    const filteredData = amiibos.filter(amiibo => (amiibo.id == req.params.id))
    res.send(filteredData)
})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))