const express = require('express');
const app = express();

//register views engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'home page'})
})

const blogs = [
   {
    title: 'hi', snippet: 'greeting',
    title: 'hi', snippet: 'greeting',
    title: 'hi', snippet: 'greeting'    
   }
]


app.get('/about', (req, res) =>
{
    res.render('about', { title: 'about me', blogs: blogs});
    // can create both way either blogs or blog: blog
})


// handle create blog route
app.get('/blogs/create', (req, res) =>
{
    res.render('create', { title: 'create a new blog', blogs});
})

//handle 404 or error 
app.use((req, res) => 
{
    res.status(404).render('404', { title: '404', blogs})
})

const port = 3001; 
app.listen(port, () => {
    console.log(`listening to ${port}`)
})