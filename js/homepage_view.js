async function homepage_view(){
    var homepage = header_view()
    var cards_list = ``
    for (var movie of data.detail_list) {
        cards_list += `
            <div class="card" id="${movie.db_id}" onclick="linkto(this.id)">
                <img src="${movie.poster_url}">
            </div>
        `
    }
    homepage += `
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
    <div class="row">`
    homepage += cards_list
    homepage += '</div>'
    ;
  appDiv.innerHTML = homepage;
}
