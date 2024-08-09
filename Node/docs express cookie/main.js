const express = require("express")
const cookieParser = require("cookie-parser")

const app = express();
const port = 3000;

app.use(cookieParser());


app.get("/login", (req, res) => {
    const {username} = req.query;

    if (!username || typeof(username)==Object) {
        res.sendStatus(400).send("username is required");
    }

    /**The res.cookie() method in Express.js is used to set cookies in the HTTP response that will be sent to the client's browser. Here's what each parameter does:

Name ('username'): This is the name of the cookie you want to set.
Value (username): This is the value you want to assign to the cookie. In this case, it's likely a username provided by the user.
Options ( { maxAge: 900000, httpOnly: true }):
maxAge: This option specifies the expiration time of the cookie in milliseconds from the current time. In this example, the cookie will expire after 900,000 milliseconds (or 15 minutes).
httpOnly: This option, when set to true, ensures that the cookie is only accessible via HTTP(S) and cannot be accessed by client-side JavaScript. This enhances security by preventing potential XSS (cross-site scripting) attacks. */
    res.cookie("username", username, { maxAge: 900000, httpOnly: true });
    res.send(`Hello ${username} Welcome !!` );
})

app.get("/profile",(req,res)=>{
    const username = req.cookies.username;
    if (!username) {
        res.sendStatus(401).send("Login first");
    }
    res.send(`Hello ${username} this is your profile`)
})

app.listen(port, (req, res) => {
    console.log("application started ..");
})