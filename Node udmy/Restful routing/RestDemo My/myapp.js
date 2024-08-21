const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path')
const { v4: uuid } = require('uuid'); //For generating ID's


app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(express.json());
app.use(express.urlencoded({extended:true}));



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
// GET ALL
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments});
})

//POST/CREATE comment
app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

//handle new comments
app.post('/comments',(req,res)=>{

    let{username,comment} = req.body;
    console.log(username);
    console.log(comment);

    comments.push({id:uuid(),username,comment})
    
    res.redirect('/comments')
})


//SHOW COMMENTS all data in json
app.get('/comments/ids',(req,res)=>{
    res.json(comments);
})

//GET SINGLE COMMENT 
app.get('/comments/:id',(req,res)=>{
    let id = req.params.id;
    console.log(id);

    let singleComment = comments.find(c=>c.id===id);
    res.render('comments/show',{singleComment})

    
})


//update comment
app.patch('/comments/:id',(req,res)=>{

    let id = req.params.id;
  
    let foundComment = comments.find((c)=>c.id===id);
    foundComment.comment = req.body.comment;
    console.log(foundComment);
    res.redirect('/comments')

})




//delete comment
app.delete('/comments/:id',(req,res)=>{

    let id = req.params.id;
    let foundComment= comments.filter(c=>c.id!==id);
    comments=foundComment;
})




//GET REQUEST
app.get('/tacos',(req,res)=>{
    
    let {meat,qty}= req.body
    res.send(`meat type is :${meat}`)
})

//POST
app.post('/tacos',(req,res)=>{
    let {meat,qty}= req.body
    console.log(meat);
    console.log(qty);

    res.send("tacos /post ")
})

//starting a server
app.listen(8080,()=>{
    console.log("Application started on : 8080");
    
})