const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/movies"

async function main(){

    await mongoose.connect(url);
    console.log('conection succesfull');

    let movieschema = new mongoose.Schema({
        title:String,
        year:Number,
        score:Number,
        rating:String
    })

    let movies = mongoose.model('movies',movieschema)
    console.log("model created..");
    
    // let TheCave = new movies({
    //     title:"the cave",
    //     year :2018,
    //     score:5,
    //     rating:"R"
    // });

    // console.log("object created..",TheCave);

    // await TheCave.save();
    // console.log("data saved..");

    movies.insertMany([
        { title:"The ShawShank Redemption",   year :2012, score:9.5, rating:'S'},
        { title:"The Dark Knight",   year :2019, score:9.8, rating:'R'},
        { title:"The Jungle Book",   year :2020, score:7.9, rating:'S'},
    ])

    
    
}

main().catch(err=>console.log(err));