// how to read file 
const fs = require('fs')
fs.readFile('./Doc/blog1.txt', (err, data) =>
{
    if (err){
        console.log(err)
    }
    console.log(data.toString())
})

// how to write file, its will delete or overwrite the old file
fs.writeFile('./Doc/blog1.txt', ('tun', 'jack'), () => {
    console.log('file has been written')
}) 
// create the new doc or new file
fs.writeFile('./Doc/blog2.txt', 'votey', () =>
{
    console.log('new file has been created')
})


// howt to create new directory 
if(!fs.existsSync('./Assets')) {
    //set condition if value to false using !
    fs.mkdir('./Assets', (err) => {
        if(err)
        {
            console.log(err)
        }
        console.log("the new directory has been created")
    }   
    ) 
    // the code will compile this code is the file folder 'assets' 
    // doesnt exists
}else fs.rmdir('./Assets', (err) => {
    if(err){
        console.log(err)
    }
    console.log('the new ./asset has been deleted')
}) 

//delete file

if(fs.existsSync('./Doc/blogdelete.txt')) {
    fs.unlink('./Doc/blogdelete.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('the file has been delete')
    }
    )
   

}