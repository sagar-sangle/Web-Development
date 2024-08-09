//block scope 
let radius = 8
if(radius>0){
    const pi =3.142;
    let Hi = "hi bro ";   // hi and pi are scoped to a block
    var hi = 'hi sis'
}
console.log(hi);//does not give error   'hi sis'
// console.log(pi);//error pi is not defiend : block is similer to scope 
// console.log(Hi);//gives error

/*
The variables that are defined with var statement have function scope.	//var has scope only inside function
The variables that are defined with let statement have block scope.     /it has scope everywhere

We can declare a var again even if it has been defined previously in the same scope.	
We cannot declare a let more than once if we defined that previously in the same scope.

Hoisting is allowed with var.	
let is hoisted but inaccessible due to temporal dead zone
*/

//point 1 
var x;
let y;
function checkScope(){       
    var x = 20;
    let y=20;
}
checkScope();
console.log(x);//0
console.log(y);//10


for(var i  =0; i<5; i++){

}
// when i is let ,console.log(i);//error beacuse it has block scope 
console.log(i);//5



//Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions within a program. In simple terms, the lexical scope is the scope of a variable or function based on where it is defined in the source code. The scope is determined by the placement of variables and functions in the code, and it remains the same throughout the execution of the program. Global variables can be accessed from anywhere within the program, while local variables can only be accessed within the function or block in which they are defined. The nested scope allows functions to access variables defined in parent functions, and block scope allows variables to have limited accessibility within a block of code.

function teamRocket(){
    let pokemon = ['pikachu','charizard','bulbosaur','squirtle']
    function iChooseYou(){
            for (const poke of pokemon) {
                console.log(`I CHOOSE YOU ${poke.toUpperCase()}!`);
            }
    }
    iChooseYou();
}

teamRocket();