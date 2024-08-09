//btn function 
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let input = document.getElementById("name").value; // Access the input value inside the event listener
    console.log(input.length); // Use input.length to get the length of the input value
});
