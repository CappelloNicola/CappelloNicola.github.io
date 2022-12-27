/*
    The problem:
    when working locally, path starting with "/" redirect to localhost
    when deploying path starting with "/" redirect to cappellonicola.github.io

    when working locally i need to write /CappelloNicola.github.io
    when deploying "CappelloNicola.github.io" must be avoided

    i could make a script where, for every link, if the link starts with "/" i add "/CappelloNicola.github.io/"
    I disable the script when deploying.
*/

