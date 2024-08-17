
console.log(process.argv);
//display node ex nd workjing dir path

let args = process.argv.slice(2);

for (const element of args) {
    console.log(`Hello There :${element}`);
    
}