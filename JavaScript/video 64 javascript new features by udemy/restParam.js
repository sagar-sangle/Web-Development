/*
The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as
 parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
  With the help of a rest parameter, a function can be called with any number of arguments, no matter how it was defined. 
Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.

Note: When … is at the end of the function parameter, it is the rest parameter. 
It stores n number of parameters as an array. Let’s see how the rest parameter works: 
*/

//without rest parameter 
function suma(a,b){
    return a+b;
}

suma(10,20);//30
suma(10,20,30,40);//30


//arguments object : this is predefine objecet in js which is alike array-object but without push pop method it contains arr the argument passed in  funciton 

function sumb(){
    let total = 0;
    for (const key of arguments) {
            total= key+total;
            
        }
        return total ;
    }

    let sum = sumb(1,23,4,4,56,10);
    console.log(sum);

    /*
    The rest parameter has to be the last argument, as its job is to collect all the remaining arguments into an array. 
     
    */


