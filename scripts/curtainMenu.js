

function showMenu(){
    var menuDiv =  document.getElementById("curtainMenu");
    if(menuDiv.classList.contains("noShow")){
        menuDiv.classList.remove("noShow");
        menuDiv.classList.add("show");
    }
    else{
        menuDiv.classList.remove("show");
        menuDiv.classList.add("noShow");
    }
}

function closeMenu(){
    var menuDiv =  document.getElementById("curtainMenu");
    menuDiv.classList.remove("show");
    menuDiv.classList.add("noShow");
}