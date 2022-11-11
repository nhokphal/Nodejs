const http = require('http');
const fs = require('fs');




const server = http.createServer((request, respone) =>
{
    console.log(request.url, request.method)
    //set head contain type
    respone.setHeader('Content-Type', 'text/html')
    // console.log('request has been made', req.url, req.method)
    //header 
    // fetching from index.html 


    // request
    let path = './Doc/';
    switch(request.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }
   
    fs.readFile(path, (err, data) => 
    {
        if(err){
            console.log(err)
            respone.end();
        }else {
            respone.end(data);
        }
    })
    

})


const port = 3001;
server.listen(port, 'localhost', () => {
    console.log(`listening to port ${port}`)
})