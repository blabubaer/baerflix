//Test daten
var filmcode = '9929'
var api_key = '08d1a9c6775524c82cd391be81409ac3' 

//getting info for the detail page
function get_detail_data(movie_id){
    // For all images you need the base url to function, getting this and returning the response as JS object
    let base_url_Promise = new Promise(function(resolve, reject) {
        var baseurl_req = new XMLHttpRequest();
        baseurl_req.open("GET", `https://api.themoviedb.org/3/configuration?api_key=${api_key}`);
        baseurl_req.onload = function(){
            if(baseurl_req.status == 200) {resolve(JSON.parse(this.responseText));}
            else {resolve('Base URL not found');}
        };
        baseurl_req.send();
    });
    // getting the movie details and returning the object
    let movie_detail_Promise = new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open("GET", `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=de`);
        req.onload = function() {
            if(req.status == 200) {resolve(JSON.parse(this.responseText))}
            else {resolve('Movie Details not found');}
        }
        req.send();
    });

    // getting the release-dates for the age restriction
    let release_dates_Promise = new Promise(function(resolve, reject){
        var cert_req = new XMLHttpRequest();
        cert_req.open("GET", `https://api.themoviedb.org/3/movie/${movie_id}/release_dates?api_key=${api_key}`);
        cert_req.onload = function() {
            if(cert_req.status == 200) {resolve(JSON.parse(this.responseText))}
            else {resolve('Release Details not found');}
        }
        cert_req.send();
    });

    // getting the cast detail
    let cast_Promise = new Promise(function(resolve, reject){
        var cast_req = new XMLHttpRequest();
        cast_req.open("GET", `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api_key}`);
        cast_req.onload = function() {
            if(cast_req.status == 200) {resolve(JSON.parse(this.responseText))}
            else {resolve('Cast Details not found');}
        }
        cast_req.send();
    });

    //when all the data arrives
    Promise.all([base_url_Promise,movie_detail_Promise,release_dates_Promise,cast_Promise]).then((responses) => {
        //Check if anything went wrong and display the failure reason as alert
        for( var response of responses) {
            if (typeof response === 'string') {
                alert(response)
            }
        }
        //response= 0:Object -> Base-URL , 1: Object -> Movie-Details, 2: Object ->  Agerestriction, 3: Object -> Cast
        model.baseurl = responses[0].images.base_url;
        model.current_movie.poster_url = model.baseurl +'original'+ responses[1].poster_path
        model.current_movie.title = responses[1].title
        model.current_movie.release_year = responses[1].release_date.slice(0,4)
        model.current_movie.length = responses[1].runtime
        model.current_movie.genres = responses[1].genres
        model.current_movie.plot = responses[1].overview
        model.current_movie.trailer_url = ''
        model.current_movie.shelf_pos = [2,'red']
        //getting the age restriction
        for (var result of responses[2].results) {
            if (result.iso_3166_1 == "DE"){
                model.current_movie.age_restriction = result.release_dates[0].certification
            }    
        }
        //getting the first 4 cast members
        cast_list = []
        for (var cast of responses[3].cast){
            if(cast_list.length < 4){
                cast_list.push(cast.name)
            }
        }
        model.current_movie.cast = cast_list
         //change the page 
        model.page = 1;
        view()

    });
}
get_detail_data(filmcode)