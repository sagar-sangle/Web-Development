
const express = require('express');
const app = express();

// app.use((req,res)=>{
//     res.send("<h1>FIRST RESPONSE ON HTTP SERVER </h1>")
//     console.log("hooray ! this is mny first request .");
    
    
// })

app.listen(8080,()=>{
    console.log("WE ARE ON THE PORT : 8080");
    
})

//basic routing routes 
//make sure to not use app.use when using other routes 
app.get('/cats',(req,res)=>{
    res.send("<h1>MEOW! MEOW MEWO</h1>")

})

app.get('/dogs',(req,res)=>{
    res.send("<h1>BHOW! BHO+HOQ BHOW</h1>")

})
// app.get('/*',(req,res)=>{
//     res.send("<h1>UNKNOW PATH</h1>")

// })
app.post('/msg',(req,res)=>{
    res.send("THIS IS A SECRTE EMESSGAE SENDED!")

})

//this matches any path after red route 
app.get('/red/:sub',(req,res)=>{
    res.send(`THIS IS A SUBREDDIT FOR : ${req.params.sub}`)
    console.log(req.params.sub);
    
})

app.get('/home',(req,res)=>{
    res.send("THIS IS A HOMEPAGE");
 
})

app.get('/cats',(req,res)=>{
    res.send("<h1>MEOW! MEOW MEWO</h1>")

})

//request query :can be passed as get in post man in param section as key value pair 

app.get('/search',(req,res)=>{

    const{name,pet}=req.query
 
 res.send(`SEARCH RESULT FOR :${name} `)
 
})
//nodemon