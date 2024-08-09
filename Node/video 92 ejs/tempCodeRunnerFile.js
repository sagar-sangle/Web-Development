;
app.set('view engine','ejs');


app.get("/",(req,res)=>{
    res.send("hello world !");

})

app.listen(port,(req,res)=>{
    console.log(`initiating applicaton of port : ${port} `);
})