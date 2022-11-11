const http = require('http');
const fs = require('fs');




const server = http.createServer((req, res) =>
{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('hello')
    // console.log('request has been made', req.url, req.method)

    //header 

    // fetching from index.html 
    fs.readFile('./Doc/index.html', (err, data) => 
    {
        if(err){
            console.log(err)
            res.end();
        } else {
            res.write(data)
            res.end();
        }
    })
    

})


const port = 3001;
server.listen(port, 'localhost', () => {
    console.log(`listening to port ${port}`)
})