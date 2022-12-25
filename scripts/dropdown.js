/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function showMenu() {
    let hoverLinksColor = "rgb(149, 173, 190)";
    let dropdownButton = document.getElementById("dropdownButton");

    document.getElementById("myDropdown").classList.toggle("show");
    if(document.getElementById("myDropdown").classList.contains("show")){
        dropdownButton.style.backgroundColor=hoverLinksColor;
    }
    else{
        dropdownButton.style.backgroundColor="";
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    let dropdownButton = document.getElementById("dropdownButton");

    if (!e.target.classList.contains('dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
            dropdownButton.style.backgroundColor="";
        }
    }
}