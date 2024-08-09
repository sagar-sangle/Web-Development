const mongoose = require("mongoose")

main().catch(err => {
    console.log(err);
})

async function main() {
    let connection = await mongoose.connect("mongodb://localhost:27017/demo");

    //creating schema
    const cats = new mongoose.Schema({
        name: String,
        age: Number
    });

    //method
    /*
    Kittens can meow, so let's take a look at how to add "speak" functionality to our documents:

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
cats.methods.speak = function speak() {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name';
  console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema); */


// Add functionality to the schema
cats.methods.speak = function() {
    const greeting = this.name ? `Meow! My name is ${this.name}.` : "Meow! I don't have a name.";
    console.log(greeting);
  };
    //compiling our schema into a Model.
    const catModel = new mongoose.model("cats", cats);

    //A model is a class with which we construct documents 
    //in this case, each document will be a catModel with properties and behaviors as declared in our schema.
    const GOJO = new catModel({ name: "GOJO", age: 2 });
    const Baby = new catModel({ name: "baby", age: 3 });

    // console.log(Baby);
    // console.log(GOJO);
    Baby.speak();
    GOJO.speak();


    //save both 
    await Baby.save().then(saved=>{
        console.log("saved Baby");
    })
    await GOJO.save();

    
}
