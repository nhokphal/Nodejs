const fs = require('fs')


//why we use stream, avoid buffing or overloading data
const readStream = fs.createReadStream('./Doc/stream.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./Doc/stream1.txt');


// 'On' is the eventListener 
readStream.on('data', (chunk) => 
{
    console.log('----NEW CHUNK----')
    console.log(chunk)
    writeStream.write(`\n new chunk \n`);
    writeStream.write(chunk)

})

// difference method using pippe 


readStream.pipe(writeStream)