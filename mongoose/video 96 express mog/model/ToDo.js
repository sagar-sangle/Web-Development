

const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
    title:String,
    desc:String,
    done:Boolean
});

//making model 
let ToDoModel = mongoose.model("ToDo",ToDoSchema);


module.exports = mongoose.model("ToDo", ToDoSchema);

