//dest arrays 


const nums = [1,2,3,4,5,6,7,8]

const [first,second]=nums;
console.log(first);
console.log(second);


//dest objects 

const movies=[{
    
        title:"shawshank redemption",
        year:2018,
        IMDB:9.0,
        cast:"forest gump"
},{

    title:"chota bheem",
            year:2012,
            IMDB:8.0,
            cast:"vheem"
},{

    title:"scary movie",
            year:2022,
            IMDB:9.5,
            cast:"akshay kumar"
}
,{

    title:"APJ abdul kalam",
            year:1999,
            IMDB:10.0,
            cast:"srk"
}]

const {title,IMDB,cast:actor,actress="N/A"}=movies[0];//you can also rename  or give default value if not present 
console.log(title);
console.log(IMDB);
console.log(actor);
console.log(actress);



//dest params 

let bestMovies = movies.filter(({IMDB})=>IMDB>=9.0)
console.log(bestMovies);




    
   
