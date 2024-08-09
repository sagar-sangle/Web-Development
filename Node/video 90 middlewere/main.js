/**
 * In JavaScript, middleware refers to a function or a series of functions that are executed in between the incoming request and the server's response in web applications. Middleware functions have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle, typically denoted by the next parameter.
 */
        const express = require("express")

        const app=express();
        const port = 2121;
        //middleware 1 
        app.use((req,res,next)=>{
            console.log("m1");
          /*  res.send("Hacked by M1"); if u use 
            here next will not execeute in res.send case beacue response has been ended here*/

            next();//if u dont use next it will get stuck here 
        })

        //middleware 2 
        app.use((req,res,next)=>{
            console.log("m2");
            next();
        })

        app.get("/",(req,res)=>{
                console.log("Home EndPoint");
                res.send("Home")
        })

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });/**
        
            In Express.js, the app.listen() method is used to start a server that listens for connections on a specified port and optionally on a specified hostname. 
            */