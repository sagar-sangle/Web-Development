/* Immediately Invoked Function Expressions (IIFE) in JavaScript
Last Updated : 11 Mar, 2024
Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after 
they are defined. They are typically used to create a local scope for variables to prevent them from polluting 
the global scope.-

Use Cases Of IIFE : 
Avoid polluting the global namespace. 
To create closures in JavaScript.
IIFE is used to create private and  public variables and methods. 
It is used to execute the async and await function.
It is used to work with require function.
 */
async function sleep(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve(101);
        },3000)
    })

}


(async function(){
     await sleep();
     console.log("worked");
})();

//destructing 
/*
Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects and bind them to variables in a more concise and readable manner.

Array Destructuring:
You can extract values from arrays using array destructuring. Here's a basic example:
*/

const colors = ['red', 'green', 'blue', 'yellow', 'pink'];
const [firstColor, secondColor, ...others] = colors;

console.log(firstColor);  // Output: 'red'
console.log(secondColor); // Output: 'green'
console.log(others);  // Output: 'blue',yellow pink

let obj = {
    a:1,
    b:2,
    c:3
}


let {x,y}=obj;
console.log(x,y);

//spread syntax : 
/*
Spread syntax in JavaScript allows an iterable, such as an array or string, to be expanded in places where zero 
or more arguments (for function calls) or elements (for array literals) are expected.
*/
function sum(a,b,c){
    return a+b+c;
}

let arr=[1,4,6];

let s = sum(...arr);
console.log(s);

const a="stay",b="back";
const c = {a,b}
console.log(c);

//hoisting : 
/*
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared within their scope, they are processed before any code is executed.

However, it's important to note that only the declarations are hoisted, not the initializations. Let's break it down for variables and functions:
*/
