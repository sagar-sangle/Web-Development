// If a function in JavaScript is called with missing arguments (less than declared), the missing values are set to undefined.

// Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:

function defaultParam(x,y=2){//defined default paramter


    return x + y;

}

let sum = defaultParam(10);
console.log(sum);