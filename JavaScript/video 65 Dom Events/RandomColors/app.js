const button = document.querySelector('button');
const h1 = document.querySelector('h1');

// button.onclick=()=>{
//     console.log("shout");
// }

// button.onclick=()=>{
//     console.log("twist");
//}this is geeting executed instead of both therefore in case of onllcik event dir you can not perform multiple event handle 


//but in case of addEvenet LIstenr you can do that 
button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

//params of eventlistner 
/*
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
 */
button.addEventListener('click',()=>console.log("shout once only!"),{once:true});//this btn will do this task only once 