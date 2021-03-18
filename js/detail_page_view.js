function detail_page_view() {
    var detailpage = header_view()
    var list_cast = ``;
    for (var actor of model.current_movie.cast) {
        list_cast += `<li>${actor}</li>`;
    }
    var list_genre = ``;
    for (var genre of model.current_movie.genres) {
        list_genre += `<li>${genre.name}</li>`;
    }
    var lang = ["German", "English", "Norwegian", "French", "Other"];
    var list_alang = ``;
    for (var slang of model.current_movie.spoken_lang) {
        if (slang == "de") list_alang += `<li>${lang[0]}</li>`;
        else if (slang == "en") list_alang += `<li>${lang[1]}</li>`;
        else if (slang == "nor") list_alang += `<li>${lang[2]}</li>`;
        else if (slang == "fr") list_alang += `<li>${lang[3]}</li>`;
        else list_alang += `<li>${lang[4]}</li>`;
    }
    var list_sublang = ``;
    for (var slang of model.current_movie.sub_lang) {
        if (slang == "de") list_sublang += `<li>${lang[0]}</li>`;
        else if (slang == "en") list_sublang += `<li>${lang[1]}</li>`;
        else if (slang == "nor") list_sublang += `<li>${lang[2]}</li>`;
        else if (slang == "fr") list_sublang += `<li>${lang[3]}</li>`;
        else list_sublang += `<li>${lang[4]}</li>`;
    }

    detailpage += `
                <div class="row">
                    <div class="poster">
                        <img src="${model.current_movie.poster_url}" alt="${model.current_movie.title} - Poster">
                    </div>
                    <div class="overview">
                        <div class="row">
                            <div class="movieTitel"><h1>${model.current_movie.title}</h1></div>
                            <div class="shelfPos">
                                <div id="pos_icon" style="background-color: ${model.current_movie.shelf_pos[1]};">Shelf ${model.current_movie.shelf_pos[0]}</div>
                            </div>
                        </div>
                        <div class="row">
                            <p class="info">Release Year: ${model.current_movie.release_year}</p>
                            <p class="info">| Length: ${model.current_movie.m_length}min</p>
                            <p class="info">| Age-restriction: ${model.current_movie.age_restriction}</p>
                        </div>
                        <div class="row">
                            <div class="cast">
                                <h4>Cast:</h4>
                                <ul>${list_cast}</ul>
                            </div>
                            <div class="genre">
                                <h4>Genre:</h4>
                                <ul>${list_genre}</ul>
                            </div>
                            <div class="genre">
                                <h4>Audio Languages:</h4>
                                <ul>${list_alang}</ul>
                            </div>
                            <div class="genre">
                                <h4>Subtitle Languages:</h4>
                                <ul>${list_sublang}</ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="plot">
                        <h3>Plot</h3>
                        <p>${model.current_movie.plot}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="trailer">
                        <h3>Trailer</h3>
                        <iframe width="560" height="315" height="auto" src="https://www.youtube.com/embed/${model.current_movie.yt_code}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            `;
    appDiv.innerHTML = detailpage;
}
