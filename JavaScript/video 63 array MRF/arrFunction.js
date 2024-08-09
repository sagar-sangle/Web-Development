let arr = [2, 3, 2, 4, 5, 2];
let arr2 = [10, 20, 30, 40];

arr.splice(2, 1, 3);
console.log(arr);

//iterating theriufh array using forin llop

for (const key in arr) {

    const element = arr[key];
    console.log(element);

}

let arr2Sqr = [];
for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    arr2Sqr.push(element ** 2);

}

console.log(arr2Sqr);

//here we had to do lot of task we can do this easy way using map filter and reduce 

// map(), reduce() and filter() are array functions that transform the array according to the applied function and 
// return the updated array.They are used to write simple, short and clean codes for
//  modifying an array instead of using the loops.

// map() method: It applies a given function on all the elements of the array and returns the updated array. 
//It is the simpler and shorter code instead of a loop. The map is similar to the following code:
// arr = new Array(1, 2, 3, 6, 5, 4); 
// for(let i = 0; i < 6; i++) { 
//     arr[i] *= 3; 
// } 
// Syntax:
// array.map(function_to_be_applied)
// array.map(function (args) {
//     // code;
// })

//here square operation is applied to each and every element in arr
let arr2Sqr2=arr.map(item=>item**2);
    console.log("arr square using map : "+arr2Sqr2);


    function cube(n){
        return n*n*n;
    }
let cubee=arr2.map(cube);
console.log(cubee);

//reduce 
// reduce() method: It reduces all the elements of the array to a single value by repeatedly applying a function. 
//It is an alternative of using a loop and updating the result for every scanned element.
// Reduce can be used in place of the following code:
// arr = new Array(1, 2, 3, 6, 5, 4); 
// result = 1 
// for(let i = 0; i < 6; i++) { 
//     result = result * arr[i]; 
// }


//here 0 is initial value  and result and item are first two elemts of array then it goes on till array lenght 

let addition=cubee.reduce(function sum(result,item){
    return result+item;
},0);

console.log("addition using reduce is "+ addition);

/*
The callback argument is a function that will be called once for every item in the array. 
This function takes four arguments, but often only the first two are used.

accumulator - the returned value of the previous iteration
currentValue - the current item in the array
index - the index of the current item
array - the original array on which reduce was called
The initialValue argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.
*/


//filter () : 720
/*It is a simpler and shorter code instead of the below code using a loop:
filter() method: It filters the elements of the array that return false for the applied condition and returns the array which contains 
elements that satisfy the applied condition. */

let arr3=[5,10,15,20,25,30];

let arr3Evens= arr3.filter(function(e){
            if(e%2==0){
                return true;
            }
            return false
        })

        console.log(arr3Evens);


        //array from useed to create array from any object 
        //eg Array.from("sagar");


