// Objects are used to model real-world entities or abstract concepts by encapsulating their properties (data) and methods (functions) into a single unit.

// In JavaScript, objects are one of the core data types, and they are used extensively. An object in JavaScript is a collection of key-value pairs, where keys are strings (or symbols) and values can be of any data type, including other objects, functions, arrays, and primitive values.

const car = {
    model: " APBREN ",
    name: "Hyundei",
    color: "Red",

};


car.color == "Red" ? console.log("true") : console.log("false");

//fucntions in objects 
const person = {
    name: "sagar",
    activity: function doSomething() {
        console.log("walking");
    },
    favColor: ["red", "green", "blue"]
}

const human = { name: "sagar", age: 24 };
console.log(human.name);

//this in objet 
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object

//1 :  this is ued to refer object using fucntion 

const cat = {
    color: "Black",
    colorOFCat: function color() {
        console.log("color is " + this.color)
    }
}

cat.colorOFCat();

//3 : Alone: When this is used alone, it typically refers to the global object. However, if you are in strict mode, this will be undefined.

console.log(this); // In a browser environment, this refers to the global object (window)


// 4 : In a function: When this is used in a regular function (not a method), it also refers to the global object.
function showThis() {
    console.log(this);
}
showThis(); // Output: global object (window in a browser)

// In an event handler: When this is used in an event handler, it refers to the element that received the event.


// <button onclick="console.log(this)">Click me</button>