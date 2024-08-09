
//callback
/*
A callback function is a function that is passed as an argument to another function and is executed after some 
operation has been completed.

Callback functions are commonly used in JavaScript, especially in asynchronous 
operations like fetching data from a server, handling events, or executing tasks after a certain delay.
*/
/*
<!-- A callback is a function passed as an argument to another function. -->

<!-- PROBLEM: 
Sequence Control
Sometimes you would like to have better control over when to execute a function.

Suppose you want to do a calculation, and then display the result.

You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:

Example
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):

Example
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5);

The problem with the first example above, is that you have to call two functions to display the result.

The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

Now it is time to bring in a callback. -->
*/

//asynchronus nature of js 
console.log("1st ")
console.log("2nd")

setTimeout(()=>{
    console.log("3rd")
},0)

console.log("4th")


//callback
function display(something){
    document.getElementsByClassName("box")[0].innerHTML=something
}

function  showSum(n1,n2 ,mycall){
    let sum = n1+n2
    console.log(sum)
    mycall(sum)

}

showSum(10,20,display);

showSum(30,40);

//callback



