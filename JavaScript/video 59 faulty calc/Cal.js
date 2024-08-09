var a = 10;
var b = 20;

var chance = Math.floor(Math.random()*11);
console.log(chance);
if (chance>1) {
    console.log("a *b = "+(a /b ));
    console.log("a +b = "+(a -b ));
    console.log("a -b = "+(a +b));
    console.log("a /b = "+(a *b));
    
}else{
    console.log("a /b = "+(a /b ));
    console.log("a -b = "+(a -b ));
    console.log("a +b = "+(a +b)); 
    console.log("a *b = "+(a *b));
}