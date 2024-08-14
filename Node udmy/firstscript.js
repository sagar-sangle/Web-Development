
let fun =async ()=>{for (let index = 0; index < 10; index++) {
    console.log("number :");
    
    setTimeout(()=>{
        console.log(index);
        
    },1000);
    
}}

fun();

// setTimeout(()=>{
    
//     for (let index = 0; index < 10; index++){
//         console.log(index);
//     }
        
//     },1000);
    
// setInterval(()=>{
//     console.log("hi");
    
// },1000);






