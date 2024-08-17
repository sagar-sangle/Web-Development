   const express = require('express')
   const app = express();
   const path = require('path')


   //if u try to run index.js from other some other path ejs will not render beacuse it will
   //try to find .ejs file in that folder where u rexecuting from therefor we will use path libary 
   //in this way ejs will run from index.js 's corrpsoing path
   
   
   app.set('view engine','ejs')
   app.set('views',path.join(__dirname,'/views'))
   app.use("/home",(req,res)=>{

    res.render('home');


   }).listen(8080,()=>{
    console.log("listening on port 8080");
    
   })