   const express = require('express')
   const app = express();
   const path = require('path')
   const redditData = require('./data.json')


   //if u try to run index.js from other some other path ejs will not render beacuse it will
   //try to find .ejs file in that folder where u rexecuting from therefor we will use path libary 
   //in this way ejs will run from index.js 's corrpsoing path
   
   app.use(express.static('public'))
   app.set('view engine','ejs')
   app.set('views',path.join(__dirname,'/views'))

   
   app.use("/home",(req,res)=>{

    res.render('home');


   }).listen(8080,()=>{
    console.log("listening on port 8080");
    
   })

   app.get('/cats',(req,res)=>{
      let cats = ['tom','gojo','chiki','baby','mushu','pillu','kitty']
      res.render('cats',{cats})
   })

   app.get('/random',(req,res)=>{

      let randNumber = Math.floor(Math.random()*10);
      return res.render('random',{rand:randNumber})
   })

   app.get('/reddit/:subreddit',(req,res)=>{
      let {subreddit} = req.params;

      const Data = redditData[subreddit];

      if(Data){
         res.render('subreddit',{...Data})
      }else{

      }

   })