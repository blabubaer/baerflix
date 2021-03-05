
//Test daten
var filmcode = '9929'
var api_key = '08d1a9c6775524c82cd391be81409ac3' 

//setting base url
var baseurl_req = new XMLHttpRequest();
baseurl_req.onreadystatechange = change_baseurl;
baseurl_req.open("GET", `https://api.themoviedb.org/3/configuration?api_key=${api_key}`, true);
baseurl_req.send();

function change_baseurl(){
    if (baseurl_req.readyState == XMLHttpRequest.DONE) {
        if(baseurl_req.status == 200){
            var response = JSON.parse(this.responseText)
            model.baseurl = response.images.base_url
        }
        else{
            console.log('There was a problem getting the files from the database')
        }
    }
}

// choosing a movie on homepage
function goto_details(movie_id) {
    
    //Get Movie details

    var req = new XMLHttpRequest();
    req.onreadystatechange = movie_listener;
    req.open("GET", `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=de`);
    req.send();

    function movie_listener(){
        if (req.readyState == XMLHttpRequest.DONE) {
            if(req.status == 200){
                var response = JSON.parse(this.responseText)
                update_current_movie(response)
                
            }
            else{
                console.log('There was a problem getting the files from the database')
            }
        }
    }

    function update_current_movie(response){
        model.current_movie.poster_url = model.baseurl + response.poster_path
        model.current_movie.title = response.title
        model.current_movie.release_year = response.release_date.slice(0,4)
        model.current_movie.length = response.runtime
        model.current_movie.genre = response.genres
        model.current_movie.plot = response.overview
        model.current_movie.trailer_url = ''
        model.current_movie.shelf_pos = [1,'green']

        var now = new Date()
        console.log('update_current_movie: '+now.getSeconds() + 'min '+ now.getMilliseconds() +'s')
        
    }

    //setting Age restriction:
    var cert_req = new XMLHttpRequest();
    cert_req.onreadystatechange = cert_listener;
    cert_req.open("GET", `https://api.themoviedb.org/3/movie/${movie_id}/release_dates?api_key=${api_key}`);
    cert_req.send();

    function cert_listener(){
        if (req.readyState == XMLHttpRequest.DONE) {
            if(req.status == 200){
                var response = JSON.parse(this.responseText)
                
                for (var result of response.results) {
                    if (result.iso_3166_1 == "DE"){
                        model.current_movie.age_restriction = result.release_dates[0].certification
                    }    
                }
                var now = new Date()
                console.log('cert_listener: '+now.getSeconds() + 'min '+ now.getMilliseconds() +'s')
            }
            else{
                console.log('There was a problem getting the files from the database')
            }
        }
    }

    // Getting the cast
    var cast_req = new XMLHttpRequest();
    cast_req.onreadystatechange = cast_listener;
    cast_req.open("GET", `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api_key}`);
    cast_req.send();

    function cast_listener(){
        if (req.readyState == XMLHttpRequest.DONE) {
            if(req.status == 200){
                var response = JSON.parse(this.responseText)
                cast_list = []
                for (var cast of response.cast){
                    if(cast_list.length < 4){
                        cast_list.push(cast.name)
                    }
                }
                model.current_movie.cast = cast_list
                var now = new Date()
                console.log('cast_listener: '+now.getSeconds() + 'min '+ now.getMilliseconds() +'s')
            }
            else{
                console.log('There was a problem getting the files from the database')
            }
        }
    }
    console.log(model)
    var now = new Date()
    console.log('finished function '+now.getSeconds() + 'min '+ now.getMilliseconds() +'s')
}

/*
var req = new XMLHttpRequest();
req.addEventListener('load', listener);
req.open("GET", "https://api.themoviedb.org/3/movie/9385?api_key=08d1a9c6775524c82cd391be81409ac3");
req.send();

*/
