$(document).ready(function() {
    $('#loadNavbar').load('../pages/navbar.html', function(responseTxt, statusTxt, xhr){
        var current_title = $("title").text();
        if(current_title === "Nicola Cappello - Portfolio"){
            current_title = "Home";
        }
        $("#currentPageName").text(current_title);
    });
});