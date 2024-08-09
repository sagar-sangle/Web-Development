

const Login = async (username,password)=>{
    if(!username || !password) throw "Missing credentials "
    if(password === "WELCOME") return "welcome"
throw 'invalid password';

}

Login("sagar","WELCOME")
.then((value)=>{
    console.log(`${value}: ${"sagar"}`);
console.log(value);

})
.catch((err)=>{
    console.log(`${err}: ${"sagar"}`);
    console.log(err);
})