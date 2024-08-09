
function callTwice(func){
    func();
    func();
}
function rollDie(){

    let die = Math.floor(Math.random() * 6)+1;
    console.log(die);
}

callTwice(rollDie)