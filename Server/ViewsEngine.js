const express = require('express')
const app = express;
const http = require('http');



app.set('view engine', 'ejs');


app.get('/about', (req, res) => 
{
    res.render('about')
})

const port = 3001;

app.listen(port, () => 
{
    console.log(`port is listening ${port}`)
})

