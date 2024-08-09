    const express=require("express")
    const mongoose = require("mongoose")
    const ToDo = require("./model/ToDo.js");

    let connection = mongoose.connect("mongodb://localhost:27017/demo");

    const app = express();
    const port = 3000;
    


app.get('/', (req, res) => {
    let todo = new ToDo({title:"first todo",desc:"desc about first todo",done:false});
    todo.save();

  res.send('Hello World!')
})




//endpoint to get a todo task 
 app.get("/task",async (req,res)=>{
        const task1 = await ToDo.findOne({});
      res.json({title: task1.title, desc: task1.desc, done: task1.done});
 })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})