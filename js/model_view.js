// Model
var model = {
    page: 0, // 0=Home, 1=details, 2=new-movie
    current_movie: {}, //Currently chosen movie
    baseurl: ''

}


function view() {
    var appDiv = document.getElementById("app");

    //Detail-Page
    
    
    if (model.page == 0) {
      var homepage = `
        <div class="row">
            <div class="main_logo">
                <img src="./src/baerflix_logo.svg" alt="Baerflix-Logo" style="max-width: 100%;" onclick="get_detail_data(9929)">
            </div>
            <div class="intro_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                    ante
                    dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                    mauris. Fusce
                    nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in
                    libero. Sed
                    dignissim lacinia nunc. </p>
    
                <p>Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
                    convallis
                    tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit
                    quis,
                    luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. <b>Aenean quam</b>. Nulla
                    metus
                    metus, ullamcorper vel, tincidunt sed, euismod in, nibh. </p>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="card">
                    <img src="./test/a1.jpg">
                </div>
                <div class="card">
                    <img src="./test/a2.jpg">
                </div>
                <div class="card">
                    <img src="./test/a3.jpg">
                </div>
                <div class="card">
                    <img src="./test/a4.jpg">
                </div>
                <div class="card">
                    <img src="./test/a5.jpg">
                </div>
                <div class="card">
                    <img src="./test/a6.jpg">
                </div>
                <div class="card">
                    <img src="./test/a1.jpg">
                </div>
                <div class="card">
                    <img src="./test/a2.jpg">
                </div>
                <div class="card">
                    <img src="./test/a3.jpg">
                </div>
                <div class="card">
                    <img src="./test/a4.jpg">
                </div>
    
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="card">
                    <img src="./test/a1.jpg">
                </div>
                <div class="card">
                    <img src="./test/a2.jpg">
                </div>
                <div class="card">
                    <img src="./test/a3.jpg">
                </div>
                <div class="card">
                    <img src="./test/a4.jpg">
                </div>
                <div class="card">
                    <img src="./test/a5.jpg">
                </div>
                <div class="card">
                    <img src="./test/a6.jpg">
                </div>
                <div class="card">
                    <img src="./test/a1.jpg">
                </div>
                <div class="card">
                    <img src="./test/a2.jpg">
                </div>
                <div class="card">
                    <img src="./test/a3.jpg">
                </div>
                <div class="card">
                    <img src="./test/a4.jpg">
                </div>
    
            </div>
        </div>`;
      appDiv.innerHTML = homepage;
    } 
    else if (model.page == 1) {
        var list_cast = ``;
        for (var actor of model.current_movie.cast) {
            list_cast += `<li>${actor}</li>`;
        }
        var list_genre = ``;
        for (var genre of model.current_movie.genres) {
            list_genre += `<li>${genre.name}</li>`;
        }

        var detailpage = `
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
                        <p class="info">| Length: ${model.current_movie.length}min</p>
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
                    <iframe width="560" height="315" height="auto" src="https://www.youtube.com/embed/QRfjwioaH60" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `;
        appDiv.innerHTML = detailpage;
    }
}
view()