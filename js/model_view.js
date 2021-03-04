// Model
var model = {
    page: 0, // 0=Home, 1=details, 2=new-movie
    current_movie: {}, //Currently chosen movie
    baseurl: ''

}


function view() {
    var appDiv = document.getElementById("app");
    var homepage = `
    <div class="row">
        <div class="main_logo">
            <img src="./src/baerflix_logo.svg" alt="Baerflix-Logo" style="max-width: 100%;">
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

    var detailpage = `
    <div class="row">
            <div class="poster">
                <img src="./test/a1.jpg" alt="Titel av Filmen">
            </div>
            <div class="overview">
                <div class="row">
                    <div class="movieTitel"><h1>Asterix und Kleopatra</h1></div>
                    <div class="shelfPos">
                        <div id="pos_icon" style="background-color: red;">Shelf 2</div>
                    </div>
                </div>
                <div class="row">
                    <p class="info">Release Year: 1975</p>
                    <p class="info">| Length: 90min</p>
                    <p class="info">| Age-restriction: 6</p>
                </div>
                <div class="row">
                    <div class="cast">
                        <h4>Cast:</h4>
                        <ul>
                            <li>Asterix</li>
                            <li>Obelix</li>
                            <li>Idefix</li>    
                        </ul>
                    </div>
                    <div class="genre">
                        <h4>Genre:</h4>
                        <ul>
                            <li>Comic</li>
                            <li>Family</li>
                        </ul>
                    </div>
                   
                </div>
                
            </div>
        </div>
        <div class="row">
            <div class="plot">
                <h3>Plot</h3>
                <p>Königin Kleopatra ärgert sich maßlos über Julius Cäsar, der ihr Volk als minderwertig und heruntergekommen
                    hinstellt. Deshalb schließt sie mit ihm eine Wette ab, bei der ihre Leute innerhalb von 3 Monaten einen
                    kompletten Palast in Alexandrien errichten sollen. Architekt Numerobis, der die Leitung des Bauprojekts
                    übernehmen muss, bittet den Druiden Miraculix um Hilfe. Natürlich sind auch Asterix und Obelix dabei mit von der
                    Partie. Cäsar ist jedoch mit allen Wassern gewaschen und legt den 3 Galliern einen Stein nach dem anderen in den
                    Weg.</p>
            </div>
        </div>
        <div class="row">
            <div class="trailer">
                <h3>Trailer</h3>
                <iframe width="560" height="315" height="auto" src="https://www.youtube.com/embed/QRfjwioaH60" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    `;
    
    if(model.page == 0){
        appDiv.innerHTML = homepage
    }
    else if(model.page == 1) {
        appDiv.innerHTML = detailpage
    }
}
view()