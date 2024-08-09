// what is ajax 
/**
 * AJAX = Asynchronous JavaScript And XML.

AJAX is not a programming language.

AJAX just uses a combination of:

A browser built-in XMLHttpRequest object (to request data from a web server)
JavaScript and HTML DOM (to display or use the data)
AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

AJAX is a developer's dream, because you can:

Update a web page without reloading the page
Request data from a server - after the page has loaded
Receive data from a server - after the page has loaded
Send data to a server - in the background
 */


//making req on web throught js

//method 1 : OLD METHOD  thtourgght xhr

//    const req = new XMLHttpRequest();

//    req.onload=function(){
//     console.log("loaded..");
//     const data = JSON.parse(this.responseText)
//     console.log(data);
//    };

//    req.onerror=function(){
//     console.log("error occured");
//     console.log(this);
//    }
//    req.open("GET","https://swapi.dev/api/people/1/");
//    req.send();
   //if u run this here u will get error 
//The error you're seeing, ReferenceError: XMLHttpRequest is not defined, occurs because XMLHttpRequest is not available in the Node.js environment. XMLHttpRequest is a built-in object in web browsers for making HTTP requests, but it doesn't exist in Node.js by default.

//method 2 : using fetch APi

    // const data = fetch("https://swapi.dev/api/people/1/")
    //             .then((res)=>{
    //                 console.log("data loaded..");//if u try to print data diractly it will not show beacuse this pormise is reolved asa this fetch resvies any header meaning it may not hav full data
    //                 console.log(res.json().then((data)=>{
    //                         console.log("DONE->",data);
    //                 }));
                    
    //             }).catch((err)=>{
    //                 console.log("error occured ..");
    //                 console.log(err);
    //             })
//in method two we also have some issue like we have to parse data to json etc 

//method 3 : best way :using axios its a athird party library will include using cdn libr
 // n

                //   const res = async (id)=>{
                //       const data =  await get(`https://swapi.dev/api/people/${id}/`)
                //       .then((res)=>{
                //         console.log("loaded",res);
                //       })
                      
                //   }
                
                //   res(1);

                    const content = { headers: {Accept :"application/json"}}
                    const joke =   axios.get("https://icanhazdadjoke.com/",content)
                    .then((res)=>{
                        console.log("Loaded",res.data.joke);
                    })
                    
                    
                   
