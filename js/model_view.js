// Model
var model = {
    page: 0, // 0=Home, 1=details, 2=new-movie
    current_movie: {}, //Currently chosen movie
    baseurl: ''

}

var appDiv = document.getElementById("app");

function view() {    
    //Home-Page    
    if (model.page == 0) homepage_view() 
    // detail-page
    else if (model.page == 1) detail_page_view()
    // New-Page
    else if(model.page == 2) new_page_view()
}
async function start() {
    await get_list()
    view()
}
start()