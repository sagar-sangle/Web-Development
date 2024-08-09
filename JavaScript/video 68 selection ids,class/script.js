

let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor="pink";
document.querySelector(".box").style.backgroundColor="yellow";//selects the first elemt and retunns first

/*document.querySelectorAll(".box").style.backgroundColor="pink";
returns html cooletion of node list  of all elements 
gives error bacuse u cannot style a collection

//to style all u can use for each loop
*/

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="pink";
})

document.getElementsByTagName("div");//returns coolection of div (all)

console.log("running.")
//no nedd to remener all this method and all just work and project ,