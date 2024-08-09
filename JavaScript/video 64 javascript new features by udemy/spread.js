// Spread Operator
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object
// into another array or object.

// ExampleGet your own React.js Server
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];

// The spread operator is often used in combination with destructuring.


//sprea with array
let nums =[2,3,4];
var maxis = Math.max(...nums);
console.log(maxis);
console.log(..."hello");

//spread with object 

let feline = { legs: 4, family: "felidae" };
let canine = { fur: "heavy", family: "canine" };

let o = { ...feline, name: "cat" };
console.log(o);
// Output: { legs: 4, family: 'felidae', name: 'cat' }

let catDog = { ...feline, ...canine };
console.log(catDog);
// Output: { legs: 4, family: 'canine', fur: 'heavy' }

catDog.family = "maline";
console.log(catDog);
// Output: { legs: 4, fur: 'heavy', family: 'maline' }


