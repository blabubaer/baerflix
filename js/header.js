function header_view(){
    var status = ''
    if(model.page == 1)status = `style="display:block"`
    
    html = `
    <div class="navbar" id='navbar'>
        <div class="homebutton" style="float: left;" onclick="linkto('home')">
            <img src="./src/baerflix_logo.svg" alt="Baerflix-Logo">
            <img src="https://fontmeme.com/permalink/210302/ab6623dbf7f17516c261fd60300724a6.png" alt="Baerflix name">
        </div>
        <div id="edit-button" ${status} onclick="linkto('edit')">Edit</div>
        <div id="new-button" onclick="linkto('new')">New</div>
    </div>
    `
    return html
}


