
const value = document.querySelector("#search").value;
const btn = document.querySelector("button");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    
    getMovie();
})

//get search text

const  movieName = ()=>{
    const val = document.querySelector("#search").value;
    return val;
}

//call api 
const getMovie = async ()=>{

    
    const movie = await movieName();
    const res = axios.get(`https://api.tvmaze.com/search/shows?q=${movie}`)
    .then((re)=>{
        console.log("FOUND MOVIE ! :",re);
        makeimages(re.data);
        

    }).catch((error)=>{
        console.log("No movie Available !!",error);
    })

    
}

//display image 
const makeimages = (shows)=>{

    const existingImages = document.querySelectorAll("img");
    existingImages.forEach(img => img.remove());
    for (const res of shows) {
        if(res.show.image){
        const img = document.createElement("IMG");
        img.src=res.show.image.medium;
        document.body.append(img);
    }
        
    }
}





