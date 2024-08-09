
let seatingChar=[
    ['christan','erik','namrita'],
    ['kevin','ben','gwen'],
    ['pikachu','charmendar','geodude']
]

for (const iterator of seatingChar) {
    for (const inner of iterator) {
        console.log(inner);
        
    }
}


// for (const char of "hello world") {
//     console.log(char);
//     process.std.
// }


const pokemonPower={
    pikachu:78,
    gastly:56,
    charizard:88,
    gangar:77,
    mewTwo:100,
    mew:98
}

 
for (const pokemon in pokemonPower) {
    //console.log(iterator); prints all object key 
    console.log(`${pokemon} Has Power : ${pokemonPower[pokemon]}`);
    
}
console.log("-----------------------------------------------------");
let combinedPower=0;

//we can also use method of object in   for of  and for in
for (const iterator of Object.values(pokemonPower)) {
     combinedPower = combinedPower+iterator;
    
}
console.log(`combined power is : ${combinedPower}`);

let t=Object.values(pokemonPower);
let totalPokemons = t.length


console.log(`Average power is : ${Math.floor(combinedPower/totalPokemons)}`);