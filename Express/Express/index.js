const express = require('express')
const app = express();


let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
  ]


app.get('/', (req, res) => {
    res.send('hello, world')
})

app.get('/api/notes', (request, response) => {
    //send
    response.json(notes)
  })


// find ID 
// app.get('/api/notes/:id', (request, respone) => {
//     const id = request.params.id;
//     //find id
//     const note = notes.find(note => note.id == id)
//     respone.json(note)
// })


app.get('/api/notes/:id', (req, res) =>
{
    const id = req.params.id;
    const note = notes.find(note => 
    {
        //respone display on console
        console.log(note.id, typeof id, id, typeof id, note.id === id)
        return note.id;
    }
    )

    console.log(note)
    res.json(note)
} )




const Port = 3001;
app.listen(Port, () => {
    console.log(`listening to port ${Port}`)
})