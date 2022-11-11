// init array
const people = ['tun', 'cheat', 'pheara']
const age = [23, 32, 32]

//display
console.log(people)
console.log(__filename)


//export with 's'
//how to export in node 
module.exports = {
    people, age
};

// access to operate system
const os = require('os')
console.log(os.platform(), os.homedir());