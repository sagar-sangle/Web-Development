// import express from 'express';

//         const app = express();
//         const port = 2121;

//         app.get("/",(req,res)=>{
//                 res.send("hello World!")
//                 console.log("hll");
//         })

//         //api chaining 
//         app.post("/",(req,res)=>{
//             res.send("post Request")
//             console.log("post request done");
//         }).put("/",(req,res)=>{
//             res.send("put Request")
//             console.log("put request done");
//         })

//         app.listen(port,()=>{
//             console.log(`${port}`);
//         })
        
// app.use(express.static('public'));

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const birds = require('routes/blog')
app.use('/birds', blog)

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 2121;

// Serve static files from the 'public' directory
app.use(express.static('public'));


app.get("/gallary", (req, res) => {
    res.sendFile('templates/gallary.html',{root:__dirname})
    
});

// Define your routes
app.get("/", (req, res) => {
    res.send("Hello World!");
    console.log("Hello");
});

// API chaining
app.post("/", (req, res) => {
    res.send("POST Request");
    console.log("POST request done");
}).put("/", (req, res) => {
    res.send("PUT Request");
    console.log("PUT request done");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
