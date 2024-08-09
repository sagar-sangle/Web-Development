
//non maintainble code 
//therere for promise
const fs = require("fs")

    
    fs.writeFile("demo.txt","hello this is demo file",()=>{
        fs.readFile("demo.txt",(error,data)=>{
            console.log(error,data.toString());
        })
        //again
        fs.writeFile("demo.txt","hello this is demo file",()=>{
            fs.readFile("demo.txt",(error,data)=>{
                console.log(error,data.toString());
            })
            //again
            
        })
        fs.writeFile("demo.txt","hello this is demo file",()=>{
            fs.readFile("demo.txt",(error,data)=>{
                console.log(error,data.toString());
            })
            //again
            
        })
        
    })