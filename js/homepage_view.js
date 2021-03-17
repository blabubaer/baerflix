async function homepage_view(){
    await get_list()
    var cards_list = ``
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
  appDiv.innerHTML = homepage;
}
