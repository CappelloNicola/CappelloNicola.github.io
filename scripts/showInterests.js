function showInterests(){
    var interestsDiv =  document.getElementById("curtainInterests");
    var arrow = document.getElementById("arrowImage");

    if(interestsDiv.classList.contains("noShow")){
        interestsDiv.classList.remove("noShow");
        interestsDiv.classList.add("show");
        arrow.src = "/icons/up-arrow.png";
    }
    else{
        interestsDiv.classList.remove("show");
        interestsDiv.classList.add("noShow");
        arrow.src = "/icons/down-arrow.png";
    }
}