const { log } = require('console')
const mongoose = require('mongoose')

const URL  = "mongodb://localhost:27017/pets"
async function main(){
    await mongoose.connect(URL)
    console.log("connection succesfull");

    //this is schema or bluprint for our model
    let kittySchema = new mongoose.Schema({
            name:String,
            breeds:String,
            age:Number

    })
    
    console.log("schema created ..");
    
    
    
    //compiling our schema into model a model is a class having properties and behavior 
    
 

    //adding method to schema
    kittySchema.methods.speak = function speak() {
        const greeting = this.name
          ? 'Meow name is ' + this.name
          : 'I don\'t have a name';
        console.log(greeting);
      };

      console.log("method added to kittens ...");
     let  kittens = mongoose.model("cats",kittySchema)

      console.log("model created ...");
      let jerry = new kittens({
          name:"jerry",
          breed:"persian",
          age:0.6
      })
      console.log("object created for jerry... : ");
  
      console.log(jerry);

      let jolu = new kittens({ name:"jolu",
        breed:"persian",
        age:0.6});

        jolu.speak();
        console.log("our jolu is now  speaking ...");

        await jolu.save();
        console.log("saving jolu into database");
        await jerry.save();
        console.log("saving jerry into db");

        let kitts = await kittens.find();

        
        console.log(kitts);
        console.log("kitten showd ..");        

}

main().catch(err=>console.log(err));
