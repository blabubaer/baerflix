
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
        
    }




    /*
    model.current_movie = {
        poster_url: '',
        title: '',
        release_year: '',
        length: '',
        age_restriction: '',
        cast: [],
        genre: [],
        plot: '',
        trailer_url: '',
    }
    */

    //setting Age restriction:
    var cert_req = new XMLHttpRequest();
    cert_req.onreadystatechange = cert_listener;
    cert_req.open("GET", `https://api.themoviedb.org/3/movie/${movie_id}/release_dates?api_key=${api_key}`);
    cert_req.send();

    function cert_listener(){
        if (req.readyState == XMLHttpRequest.DONE) {
            if(req.status == 200){
                //var response = JSON.parse(this.responseText)
                console.log(this.responseText)
                
            }
            else{
                console.log('There was a problem getting the files from the database')
            }
        }
    }

}
goto_details(filmcode)
/*
var req = new XMLHttpRequest();
req.addEventListener('load', listener);
req.open("GET", "https://api.themoviedb.org/3/movie/9385?api_key=08d1a9c6775524c82cd391be81409ac3");
req.send();

*/
