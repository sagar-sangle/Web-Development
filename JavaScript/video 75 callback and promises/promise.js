
/*
A promise is an object in JavaScript representing the eventual completion or failure of an asynchronous operation 
 its resulting value. It allows you to handle asynchronous operations more easily and elegantly, especially when dealing 
 with multiple asynchronous tasks or chaining them together.=
*/

let x = Math.floor(Math.random() * 2);
let myPromise = new Promise((myResolve, myReject) => {

    if (x == 0) {
        myResolve("ok");
    } else {
        myReject("Error");
    }
})

myPromise.then(
    (a) => {
        document.querySelector(".box").innerHTML = "Ok";
        console.log(a);
    },
    (b) => {
        document.querySelector(".box").innerHTML = "error";
        console.log(b);
    }
)



const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber); // Operation succeeded
        } else {
            reject("Random number is too small"); // Operation failed
        }
    }, 1000); // Simulating a delay of 1 second
});

myPromise2.then((result) => {
    console.log("Promise resolved with result:", result);
}).catch((error) => {
    console.error("Promise rejected with error:", error);
});



/**
 * 
 * @returns Parameters

The promise constructor takes only one argument which is a callback function
The callback function takes two arguments, resolve and reject
Perform operations inside the callback function and if everything went well then call resolve.
If desired operations do not go well then call reject.


A Promise has four states
State	Description
Fulfilled	Action related to the promise succeeded
Rejected	Action related to the promise failed
Pending	Promise is still pending i.e. not fulfilled or rejected yet
Settled	Promise has been fulfilled or rejected
 */




const fakePromiseRequest = () => {
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * (4500)) + 500;

        setTimeout(() => {
            if (num > 4000) {
                reject("Request Timeout ...");
            } else {
                resolve("Request succesfull");
            }
        }, num)
    })
}

let weather = fakePromiseRequest("www.weatherForecast/api/maharshtra");
weather.then(() => {
    console.log("it worked for maharstra ...");
    return fakePromiseRequest("www.weatherForecast/api/ahmednagar")
        .then(() => {
            console.log("ahmednagar data caught ");
            return fakePromiseRequest("www.weatherForecast/api/maliwada")
            .then(()=>{
                console.log("maliwafa dat acaught ");
            }).catch(()=>{
                console.log("did not caughed maliwada data  ");
            })
        }).catch(() => {
            console.log("did not worked data for ahmedganr ");
        })
}).catch(() => {
    console.log("did not worked for maharstra ...");
})

//in this way we can use promise to reduce callback hell but we have more advance to it to increase code readability

fakePromiseRequest("www.weatherForecast/api/maharshtra")
.then(()=>{
    return fakePromiseRequest("www.weatherForecast/api/ahmedanagar")
})
.then(()=>{
    return fakePromiseRequest("www.weatherForecast/api/maliwada")
})
.catch(()=>{
    console.log("unsuccesfulll data fetch");
})