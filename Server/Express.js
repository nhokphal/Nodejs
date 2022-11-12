const express = require('express')
const app = express();



app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    // read file html 
    res.sendFile('./Doc/index.html', {root: __dirname});

})

app.get('/about', (req, res) => {
    res.sendFile('./Doc/about.html', {root: __dirname})
})




const Port = 3001;
app.listen(Port, () => 
{
    console.log(`server is listening ${Port}`)
})
