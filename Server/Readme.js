const fs = require('fs');

const read = fs.readFile('./Doc/about.html', (err, data) =>
{
    if(err)
    {
        console.log(err)
    }
    console.log(data.toString())
}
)


