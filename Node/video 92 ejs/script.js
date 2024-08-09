/* 
EJS stands for "Embedded JavaScript". It's a simple templating language that lets you generate HTML markup with plain JavaScript. EJS allows you to embed JavaScript code directly within your HTML files, making it easier to generate dynamic content. 
*/

const express = require("express")
let app = express();
const port=3000;
app.set('view engine','ejs');



app.get("/",(req,res)=>{
    res.send("hello world !");

});

app.get("/home",(req,res)=>{
    res.render("index",{name:"sagar"});
    
});
app.get("/nav",(req,res)=>{
    res.sendFile("templates/index.html",{root: __dirname})
    
});







app.listen(port,(req,res)=>{
    console.log(`initiating applicaton On port : ${port} `);

})