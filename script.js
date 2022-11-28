const APILINK = 'https://api.themoviedb.org';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=6e2cb77c926446dcff748d8477e0aa6d&language=en-US&query=b&page=1&include_adult=false&year=2022';
// const API_KEY = "6e2cb77c926446dcff748d8477e0aa6d";

// fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)0 
// .then(res=>(
//     res.json()
// )).then(json=>(
//     // console.log(json.poster_path)
//     document.getElementById('poster_path').src = IMG_PATH+json.poster_path    
// ))

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {

            const div_card = document.createElement('div');
            div_card.setAttribute('class','card');

            const div_row = document.createElement('div');
            div_row.setAttribute('class','row');

            const div_column = document.createElement('div');
            div_column.setAttribute('class','column');

            const image = document.createElement('img');
            image.setAttribute('class','thumbnail');
            image.setAttribute('id','image');

            const title = document.createElement('h3');
            title.setAttribute('id', 'title');

            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;


            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);



        });
    });

}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML = "";

    const searchItem = search.value;

    if (searchItem){
        returnMovies(SEARCHAPI + searchItem);
        search.value ="";

    }
})

