// Function to calculate the sum
function calculate() {
    try {
        let num1 = document.getElementById("n1").value;
        let num2 = document.getElementById("n2").value;

        if (isNaN(num1) || isNaN(num2)) throw "Not a number";
        return parseInt(num1) + parseInt(num2);
    } catch (err) {
        // Create a div for the error message
        let errorDiv = document.createElement("div");
        errorDiv.innerHTML = "<b>Enter a valid number</b>";
        document.body.appendChild(errorDiv);

        // Return 0 to indicate failure
        return 0;
    }
}

// Event listener for button click
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    // Create a new div element
    let div = document.createElement("div");
    div.setAttribute("class", "output");

    // Calculate the sum and insert it into the div
    div.innerHTML = `<b>${calculate()}</b>`;

    // Append the div to the document body
    document.body.append(div);
});
