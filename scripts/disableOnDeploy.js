/*
    The problem:
    when working locally, path starting with "/" redirect to localhost
    when deploying path starting with "/" redirect to cappellonicola.github.io

    when working locally i need to write /CappelloNicola.github.io
    when deploying "CappelloNicola.github.io" must be avoided

    i could make a script where, for every link, if the link starts with "/" i add "/CappelloNicola.github.io/"
    I disable the script when deploying by commenting the function below
*/

/*
$(document).ready(function(){
    var allLinks = $('a');

    for (var i = 0; i<allLinks.length; i++){
        var element = allLinks[i];
        var href = element.href;
        var indexOfLocalhost = href.indexOf("localhost");
        var newHref;

        if(indexOfLocalhost!=-1){
            var indexOfSlash = href.indexOf("/", indexOfLocalhost);
            newHref = href.substring(0, indexOfSlash+1) + 'CappelloNicola.github.io/' + href.substring(indexOfSlash + 1 );
            console.log(newHref);
            element.href = newHref;
        }
    }

    var allStyles = $('link');
    console.log(allStyles);


});
*/