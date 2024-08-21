
const express = require('express')
const app = express();
const port = 8080;
const path = require('path')
const { v4: uuid } = require('uuid'); //For generating ID's


// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Serve static files (CSS and JS)
app.use(express.static(path.join(__dirname, 'public')));



//middleware To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))


// Our fake database:
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

//get all comments 
app.get('/comments', (req, res) => {

    res.render('show')
    
})

//render a form
app.get('/comments/add', (req, res) => {
    res.render('add');
})

//get a single comment
app.get('/comment/:id', (req, res) => {

    let { id } = req.params;
    let comment = comments.find((c) => String(c.id) === id);
    console.log("comment is ", comment);

    if (comment) {



        res.json(comment);

    } else {


        res.sendStatus(404);
    }

})


//create a new comment
app.post('/comments', (req, res) => {
    let { username, comment } = req.body;

    //male sure app is able to use express.json() as middle ware 
    comments.push({ username, comment, id: uuid() });

    res.redirect('/comments')
})




// PUT to update a comment
app.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { username, comment } = req.body;

    // Find the comment to update
    const index = comments.findIndex(c => String(c.id) === id);

    if (index !== -1) {
        // Update the comment
        comments[index] = { id, username, comment };

        res.json(comments[index]);
    } else {
        res.sendStatus(404);
    }
});


//delete a comment 
app.delete('/comments/:id', (req, res) => {

    let commentTODelete = req.params.id;

    let newComments = comments.filter(c => c.id !== commentTODelete);
    comments = newComments;
    res.redirect('/comments')
})


//start the server
app.listen(port, () => {

    console.log(`App is running on port : ${port}`);

})

