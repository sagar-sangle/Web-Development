const express = require('express')
const app = express()//defines application 
const port = 3000

/*To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.
static function, specify a mount path for the static directory, as shown below:

app.use('/static', express.static('public')) */


app.get('/', (req, res) => {
  res.send('Hello World! This is Default page ')
})

app.get('/about',(req, res)=>{
    res.send("About us and u ")
    
})
app.get('/contact',(req, res)=>{
    res.send("(8830018980 )");
    
})
app.get("/blog",(req,res)=>{
    res.send("Java Blog\nPython Blog\n javascript Blog");
   
})
// app.get("/blog/java",(req,res)=>{
//     res.send("Java Blog")
// })
// app.get("/blog/python",(req,res)=>{
//     res.send("python Blog")
// })


//instead of all this diff endpoints for eg.200 blog u dont have to write this many get/endppoint requests u can use param
app.get("/blog/:slug",(req,res)=>{
    res.send(`${req.params.slug} Blog`)
    // console.log(req);
    console.log(req.params);
    console.log(req.query);

})

//query param : it is passed inside our endpoints ie ?mode=dark region=in
app.listen(port, (req, res) => {
  console.log(`Example app listening on port ${port}`)
})

//serving static files html jason etc 
/*
To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:

express.static(root, [options])
The root argument specifies the root directory from which to serve static assets. For more information on the options argument, see express.static.

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

app.use(express.static('public'))
*/


app.use(express.static('public'));

