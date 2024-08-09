// async and await are features introduced in ECMAScript 2017 (ES8) that provide a more elegant and concise way to work with asynchronous JavaScript code, particularly with promises. They allow you to write asynchronous code in a more synchronous-looking style, making it easier to read and reason about.

// Here's a brief overview of async and await:

// async function:
// The async keyword is used to define a function as asynchronous.
// An async function always returns a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an error, the promise will be rejected with the thrown error.
// Inside an async function, you can use the await keyword to pause the execution of the function until a promise is settled (resolved or rejected).
// await operator:
// The await keyword is used to pause the execution of an async function until a promise is settled.
// When await is used with a promise, it waits for the promise to resolve, and then it returns the resolved value. If the promise is rejected, it throws an error, which can be caught using try...catch blocks.
// await can only be used inside an async function. If you try to use it outside of an async function, it will result in a syntax error.



/*async function  getData(){

    //this is simulation of getting api 
     return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("Ok")
            console.log("......");
        },3000)
    })
}//must return async function 
//must return async function 
*/
//this is actual function  with fake api 
//get data
async function  getData(){
    
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/401')//returns a promise and fetches data from jason placeholder 
    // let data = await x.json();//parsing data jason
    let data = await x.text();//to text
    console.log(data);
    
}

/*The JavaScript fetch() method is used to fetch resources from a server. It returns a Promise that resolves to the Response object representing the response to the request.

The fetch method can also make HTTP requests- GET request (to get data) and POST request (to post data). Fetch also integrates advanced HTTP concepts such as CORS and other extensions to HTTP.

Note: Fetch API comes with the fetch() method, which is used to fetch data from different sources. */
//post data 
async function postData(){

    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Best Programmer',
    body: 'sagar sangle',
    userId: 401,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

async function main() {
    console.log("loading");
    

    await postData()//
    await getData()//below will wait for this to execute 
    //get sagars data from api

    console.log("data fetched successfully ");
    console.log("futher processign ");
}

main()


