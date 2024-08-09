//making request old fashion way using XMLHttpRequest it does not support promsies
//on this url -> https://catfact.ninja/fact or https://swapi.dev/api/people/1


const req = new XMLHttpRequest();
req.onload = function () {
    console.log("LOADED");
    console.log();
    const data = JSON.parse(this.responseText)
    console.log(data);
    //if we need to make another request we have to do that here but it makes code clunky and error friendy
}

req.onerror = function () {
    console.log("ERROR");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1");
req.send();


//method 2 -> using fetch method ;

const fact = fetch("https://catfact.ninja/fact") //it returns a promise 
    .then((res) => {
        console.log("Resolved ", res.json().then((data) => {
            console.log("again resoleed with data : ", data);
        }));
    })
    .catch((e) => {
        console.log("Error occured");
    })
