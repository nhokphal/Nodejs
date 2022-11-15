const express = require('express');
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose');
const Blog = require('./Models/blog')

//connect data from mongoseDB
const dataDTB = 'mongodb+srv://phal:b0w9sca2by0G2Cvv@node01.mgtl7bp.mongodb.net/node-01?retryWrites=true&w=majority'
mongoose.connect(dataDTB)
    .then((result) => app.listen(3001))
    .catch((err) => console.log(err));





//resgister engine
app.set('view engine', 'ejs');
//listening port
app.use(morgan('tiny'))


app.get('/', (req, res) => 
{
    res.render('index');
}
)


app.get('/add-blog', (req, res) => {
    //pass object 
    // get new instance
    const blog = new Blog({
        title: 'abc dot come 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    })
    blog.save()
        .then((result) => {
            res.send(result); 
        })
        .catch((err) => {
            console.log(err);
        })
})


app.get('/all-blog', (req, res) => {
    Blog.find()
        .then((result) => 
        res.send(result))
        .catch((err) => 
        {
            console.log(err)
        }
        )
})




app.get('/about', (req, res) => {
    res.render('about')
})

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('about')
})


app.get('/create', (req, res) => {
    res.render('create')
})


app.use((req, res) => 
{
    res.status(404).render('404');
})


