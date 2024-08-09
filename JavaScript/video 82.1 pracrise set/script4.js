//calculate simple intrest 

function simpleIntrest(p,r,t){
    return (p*r*t)/100;
}

let val = [100000,8,1];
console.log(simpleIntrest(...val));