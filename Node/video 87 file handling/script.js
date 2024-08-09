const { log } = require("console")
const fs = require("fs")

    console.log("hello");
    fs.writeFile("demo.txt","hello this is demo file",()=>{
        console.log("creating")
    })
    console.log("Good bye ");

    //create udpate delete read
    //read :
    fs.readFile("demo.txt",(error,data)=>{
        console.log(error,data.toString());
    })
    console.log("update");

    //update
    fs.appendFile("demo.txt","\nand this is appended data: 123",()=>{
        fs.readFile("demo.txt",(error,data)=>{
            console.log(data.toString());
        })

    })

    //delete