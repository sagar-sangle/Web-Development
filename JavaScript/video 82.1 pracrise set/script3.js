
//write function in js which resolves the promise after n seconds .the fun takes n as the 
//parameter. use an iife to execute a function with diff.values of n 


 function demo(n){

     return new Promise((resolve,reject)=>{
    setTimeout(()=>{
            if(n>0){
                resolve("Success");
            }else{
                reject("error")
            }
        },n*1000)
    })
 
}

(function(){

    demo(2).then((value)=>{
        console.log(value);
    })
})();