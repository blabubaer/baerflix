//Test daten
var api_key = '08d1a9c6775524c82cd391be81409ac3' 

//getting detail info for one movie
async function get_detail_data(movie_id){
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
        req.open("GET", `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en`);
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
    await Promise.all([base_url_Promise,movie_detail_Promise,release_dates_Promise,cast_Promise]).then((responses) => {
        //Check if anything went wrong and display the failure reason as alert
        for( var response of responses) {
            if (typeof response === 'string') {
                alert(response)
                return
            }
        }
        //response= 0:Object -> Base-URL , 1: Object -> Movie-Details, 2: Object ->  Agerestriction, 3: Object -> Cast
        model.baseurl = responses[0].images.base_url;
        model.current_movie.poster_url = model.baseurl +'original'+ responses[1].poster_path
        model.current_movie.title = responses[1].title
        model.current_movie.release_year = responses[1].release_date.slice(0,4)
        model.current_movie.m_length = responses[1].runtime
        model.current_movie.genres = responses[1].genres
        model.current_movie.plot = responses[1].overview
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
        if(model.page == 1){
            var index = data.overview.indexOf(movie_id.toString())
            model.current_movie.shelf_pos = data.detail_list[index].shelf_pos
            model.current_movie.yt_code = data.detail_list[index].yt_code
            
        }
        else if(model.page == 2){
            model.current_movie.shelf_pos = [0,'']
            model.current_movie.yt_code = ''
            model.current_movie.movie_id = movie_id
        }
        return 

    });
};
//for switching between pages
async function linkto(aim){
    if(aim=="home"){
        model.page = 0
        view()
    }
    else if(aim=="new"){
        model.page = 2
        view()
    }
    else{
        model.page = 1
        await get_detail_data(aim)
        view()

    }
}
//for the search button on new-page - gets info for checking and opens input for rest of information
async function search(){
    var search_value = document.getElementById("movie_id_input_field").value
    get_detail_data(search_value).then((value)=>{
        new_page_view(search_value)
    })

}
//handles the dropdown menu for the choosing of shelf-pos
function choose(item) {
    var display_label = item.parentNode.previousElementSibling
    if(item.innerHTML.length < 2){
        display_label.textContent = item.innerHTML
        display_label.classList.add("chosen")
        model.current_movie.shelf_pos[0] = parseInt(item.innerHTML)
    }
    else{
        display_label.style.backgroundColor = item.innerHTML
        display_label.style.borderColor = item.innerHTML
        model.current_movie.shelf_pos[1] = item.innerHTML

    }
}
// handles the save button and save all information into the data
function save(){
    var audio_checkboxes = [
        document.getElementById("s-de"),
        document.getElementById("s-en"),
        document.getElementById("s-nor")
        ,document.getElementById("s-fr"),
        document.getElementById("s-other"),
    ]
    var sub_checkboxes = [
        document.getElementById("sub-de"),
        document.getElementById("sub-en"),
        document.getElementById("sub-nor"),
        document.getElementById("sub-fr"),
        document.getElementById("sub-other"),
    ]
    model.current_movie.yt_code = document.getElementById("yt_code_field").value
    if (model.current_movie.shelf_pos[0] == 0) alert("Please choose a shelf position!");
    else if (model.current_movie.shelf_pos[1] == "") alert("Please choose a shelf color!");
    else if (model.current_movie.yt_code == "") alert("Please enter a Youtube Code");
    else if (model.current_movie.yt_code != "" && model.current_movie.yt_code.length != 11) {
        alert("Please enter a valid YT video code!")
    }
    else if (!checkbox_check(audio_checkboxes)) alert("Please choose at least one audio language!");
    else if (!checkbox_check(sub_checkboxes)) alert("Please choose at least one subtitle language!")
    else {
        data.overview.push(model.current_movie.movie_id);
        var movie_det = {
            db_id: model.current_movie.movie_id,
            yt_code: model.current_movie.yt_code,
            shelf_pos:model.current_movie.shelf_pos,
        }
        var spoken_lang = [];
        for (var box of audio_checkboxes){
            if (box.checked) spoken_lang.push(box.name)
        }
        var sub_lang = [];
        for (var box of sub_checkboxes) {
            if (box.checked) sub_lang.push(box.name)
        }
        movie_det.spoken_lang = spoken_lang;
        movie_det.sub_lang = sub_lang

        data.detail_list.push(movie_det)
        linkto(data.overview[data.overview.length - 1])
    }
}
//checks if the checkboxes have been chosen
function checkbox_check(list_of_boxes) {
    var counter = 0
    for (var box of list_of_boxes) {
        if (box.checked) counter ++;
    };
    if (counter > 0) return true;
    else return false;
}
// gets the list of movies from themoviedb and updates data 
async function get_list(){
    let list_data_Promise = new Promise(function(resolve, reject) {
        var list_data = new XMLHttpRequest();
        list_data.open("GET", `https://api.themoviedb.org/4/list/${access_data.list_id}?api_key=${api_key}`);
        list_data.setRequestHeader("content-type", "application/json;charset=utf-8");
        list_data.setRequestHeader("authorization", 'Bearer '+ access_data.access_token);
        list_data.onload = function(){
            if(list_data.status == 200) {resolve(JSON.parse(this.responseText));}
            else {resolve('Base URL not found');}
        };
        list_data.send();
    });
    let list_resolve = await list_data_Promise
    console.log(list_resolve)
    for (const comment in list_resolve.comments) {
        data.detail_list.push(JSON.parse(list_resolve.comments[comment]))
        data.overview.push(JSON.parse(list_resolve.comments[comment]).db_id)
    }
    
}
