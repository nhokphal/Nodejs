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
            // status 200 is 'Success'
            respone.statusCode =  200;
            break;
        case '/about':
            path += 'about.html';
            // status 200 is 'Success'
            respone.statusCode = 200;
            break;
        case '/about-me':
            path += 'about.html';
            //status 'redirect'             respone.statusCode = 301;
            respone.setHeader('location', '/about');
            respone.end();
            break;
        default:
            path += '404.html';
            // status error 'page not found' 
            respone.statusCode = 404;
            break;
    }
   
    // reading directory
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