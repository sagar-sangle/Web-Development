
const fs  = require('fs');

//synchronus verion of method
// fs.mkdir('sampleFolder',{recursive:true},(error)=>{
//     console.log(error);
    
// });
// console.log("iam after diractory created .");



//asynchronous verson of method
// fs.mkdirSync('sampleFolderAsync',{recursive:true},(error)=>{
//     console.log(error);
    
// });
// console.log("iam after diractory created .");




//creating folder using cmd argument
//node         demo.js             filename
//1)node path  demo file path      filename passed in cmd arg
let FName = process.argv[2];

fs.mkdirSync(FName);




