function new_page_view(id){
    var newpage = header_view()
    var list_cast = ``;
    var list_genre = ``
    var status = 'inactive'
    var edit = ['Shelfnumber','Shelfcolor']
    var test_movie = {
        title:"",
        release_year: "",
        age_restriction: "",
        plot:"",
    }
    if(model.current_movie.m_length > 0){
        status = ''
        test_movie = model.current_movie
        for (var actor of model.current_movie.cast) {
            list_cast += `<li>${actor}</li>`;
        }
        for (var genre of model.current_movie.genres) {
            list_genre += `<li>${genre.name}</li>`;
        }
    }
    if(model.current_movie.shelf_pos != [] && model.current_movie.shelf_pos){
        edit = model.current_movie.shelf_pos
    }

    var movie_id
    if (model.current_movie.movie_id) movie_id = model.current_movie.movie_id
    else movie_id = ""
    


    newpage += `
        <div class="row">
            <h2 class="rowtitle_a">Movie ID:</h2>
            <div class="searchfield">
                <input type="text" placeholder="themoviedb-ID" name="movie_id" class="inputfield" id="movie_id_input_field" value="${movie_id}">
            </div>
            <div class="searchbutton">
                <button id="searchbutton" class="button-s" onclick="search()">Search</button>
            </div>
            <div class="savebutton">
                <button id="savebutton" class="s-button ${status}" onclick="save()">Save</button>
            </div>
        </div>
        <div class="row ${status}">
            <h3 class="rowtitle">Shelf Position:</h3>
            <div class="row">
                <div class="shelfnumber">
                    <div class="dropdown">
                        <button class="dropbtn">${edit[0]}</button>
                        <div class="dropdown-content">
                            <div onclick="choose(this)">1</div>
                            <div onclick="choose(this)">2</div>
                            <div onclick="choose(this)">3</div>
                        </div>
                    </div>
                </div>
                <div class="shelfnumber">
                    <div class="dropdown">
                        <button class="dropbtn">${edit[1]}</button>
                        <div class="dropdown-content">
                            <div onclick="choose(this)" >Red</div>
                            <div onclick="choose(this)" >Blue</div>
                            <div onclick="choose(this)" >Green</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row ${status}" >
            <h3 class="rowtitle">Youtube Trailer Code:</h3>
            <div class="searchfield_t">
                <input type="text" placeholder="enter YT-Trailer code here"  class="inputfield shelf" id="yt_code_field">
            </div>
        </div>
        <div class="row ${status}">
        <div class="spoken-lang">
            <h3 class="details-title">Audio Languages</h3>
            <ul class="checkbox-list">
                <li><input type="checkbox" name="de" id="s-de"> German</li>
                <li><input type="checkbox" name="en" id="s-en"> English</li>
                <li><input type="checkbox" name="nor" id="s-nor"> Norwegian</li>
                <li><input type="checkbox" name="fr" id="s-fr"> French</li>
                <li><input type="checkbox" name="other" id="s-other"> Other Original Language</li>
            </ul>
        </div>
        <div class="sub-lang">
            <h3 class="details-title">Subtitle Languages</h3>
            <ul class="checkbox-list">
                <li><input type="checkbox" name="de" id="sub-de"> German</li>
                <li><input type="checkbox" name="en" id="sub-en"> English</li>
                <li><input type="checkbox" name="nor" id="sub-nor"> Norwegian</li>
                <li><input type="checkbox" name="fr" id="sub-fr"> French</li>
                <li><input type="checkbox" name="other" id="sub-other"> Other</li>
            </ul>
        </div>
            
        </div>
        <div class="row ${status}">
            <h2 class="details-title">Details</h2>
        </div>
        <div class="row ${status}">
            <div class="label">Title:</div><div class="information">${test_movie.title}</div>
        </div>
        <div class="row ${status}">
            <div class="label">Release Year:</div><div class="information">${test_movie.release_year}</div>
        </div>
        <div class="row ${status}">
            <div class="label">Genres:</div><div class="information"><ul>${list_genre}</ul></div>
        </div>
        <div class="row ${status}">
            <div class="label">Cast:</div><div class="information"><ul>${list_cast}</ul></div>
        </div>
        <div class="row ${status}">
            <div class="label">Age Restrictions:</div><div class="information">${test_movie.age_restriction}</div>
        </div>
        <div class="row ${status} last">
            <div class="label">Plot:</div><div class="information">${test_movie.plot}</div>
        </div>

    `;
        appDiv.innerHTML = newpage

        var searchfield = document.getElementById('movie_id_input_field')
        searchfield.addEventListener("keyup", function(event){
            if(event.keyCode === 13) {
                event.preventDefault();
                search()
            }
        })
}