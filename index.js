
const express = require('express'); 
const app = express();              
const port = 5000;                  

//--------------------root
app.get('/', (req, res) => {        
    res.sendFile('index.html', {root: __dirname});
});

//--------------------files
app.get('/files/Curriculum.pdf', (req,res) => {
    res.sendFile('/files/Curriculum.pdf', {root: __dirname});
});

//--------------------pages
app.get('/pages/navbar.html', (req,res) => {
    res.sendFile('/pages/navbar.html', {root: __dirname});
});

app.get('/pages/footer.html', (req,res) => {
    res.sendFile('/pages/footer.html', {root: __dirname});
});

app.get('/pages/projects.html', (req,res) => {
    res.sendFile('/pages/projects.html', {root: __dirname});
});

app.get('/pages/games.html', (req,res) => {
    res.sendFile('/pages/games.html', {root: __dirname});
});

app.get('/pages/comics.html', (req,res) => {
    res.sendFile('/pages/comics.html', {root: __dirname});
});

app.get('/pages/movies.html', (req,res) => {
    res.sendFile('/pages/movies.html', {root: __dirname});
});

app.get('/pages/music.html', (req,res) => {
    res.sendFile('/pages/music.html', {root: __dirname});
});

//--------------------scripts
app.get('/scripts/loadNavbar.js', (req,res) => {
    res.sendFile('/scripts/loadNavbar.js', {root: __dirname});
});

app.get('/scripts/showInterests.js', (req,res) => {
    res.sendFile('/scripts/showInterests.js', {root: __dirname});
});

app.get('/scripts/curtainMenu.js', (req,res) => {
    res.sendFile('/scripts/curtainMenu.js', {root: __dirname});
});

app.get('/scripts/loadFooter.js', (req,res) => {
    res.sendFile('/scripts/loadFooter.js', {root: __dirname});
});

app.get('/scripts/jquery.js', (req,res) => {
    res.sendFile('/scripts/jquery.js', {root: __dirname});
});

//--------------------styles
app.get('/styles/homepage.css', (req,res) => {
    res.sendFile('/styles/homepage.css', {root: __dirname});
});

app.get('/styles/games.css', (req,res) => {
    res.sendFile('/styles/games.css', {root: __dirname});
});

app.get('/styles/workInProgress.css', (req,res) => {
    res.sendFile('/styles/workInProgress.css', {root: __dirname});
});

app.get('/styles/projects.css', (req,res) => {
    res.sendFile('/styles/projects.css', {root: __dirname});
});

app.get('/styles/navbar.css', (req,res) => {
    res.sendFile('/styles/navbar.css', {root: __dirname});
});

app.get('/styles/variables.css', (req,res) => {
    res.sendFile('/styles/variables.css', {root: __dirname});
});

app.get('/styles/commonStyles.css', (req,res) => {
    res.sendFile('/styles/commonStyles.css', {root: __dirname});
});

app.get('/styles/responsive.css', (req,res) => {
    res.sendFile('/styles/responsive.css', {root: __dirname});
});

app.get('/styles/footer.css', (req,res) => {
    res.sendFile('/styles/footer.css', {root: __dirname});
});

app.get('/styles/comics.css', (req,res) => {
    res.sendFile('/styles/comics.css', {root: __dirname});
});

//--------------------images
app.get('/images/myPhoto.png', (req,res) => {
    res.sendFile('/images/myPhoto.png', {root: __dirname});
});

app.get('/images/FutabaWorkInProgress.png', (req,res) => {
    res.sendFile('/images/FutabaWorkInProgress.png', {root: __dirname});
});

app.get('/images/videogames.jpg', (req,res) => {
    res.sendFile('/images/videogames.jpg', {root: __dirname});
});

app.get('/images/unisaEatIcon.jpg', (req,res) => {
    res.sendFile('/images/unisaEatIcon.jpg', {root: __dirname});
});

app.get('/images/maze.jpg', (req,res) => {
    res.sendFile('/images/maze.jpg', {root: __dirname});
});

    //--------------------games images
    app.get('/images/games/p5r.jpg', (req,res) => {
        res.sendFile('/images/games/p5r.jpg', {root: __dirname});
    });

    app.get('/images/games/p4g.jpg', (req,res) => {
        res.sendFile('/images/games/p4g.jpg', {root: __dirname});
    });

    app.get('/images/games/tlou.jpg', (req,res) => {
        res.sendFile('/images/games/tlou.jpg', {root: __dirname});
    });

    //--------------------comics images
    app.get('/images/comics/berserk.jpg', (req,res) => {
        res.sendFile('/images/comics/berserk.jpg', {root: __dirname});
    });

    app.get('/images/comics/blame.jpg', (req,res) => {
        res.sendFile('/images/comics/blame.jpg', {root: __dirname});
    });

    app.get('/images/comics/chainsawMan.jpg', (req,res) => {
        res.sendFile('/images/comics/chainsawMan.jpg', {root: __dirname});
    });
    
//--------------------icons
app.get('/icons/comic.png', (req,res) => {
    res.sendFile('/icons/comic.png', {root: __dirname});
});

app.get('/icons/mail.png', (req,res) => {
    res.sendFile('/icons/mail.png', {root: __dirname});
});

app.get('/icons/down-arrow.png', (req,res) => {
    res.sendFile('/icons/down-arrow.png', {root: __dirname});
});

app.get('/icons/up-arrow.png', (req,res) => {
    res.sendFile('/icons/up-arrow.png', {root: __dirname});
});

app.get('/icons/videogames.png', (req,res) => {
    res.sendFile('/icons/videogames.png', {root: __dirname});
});

app.get('/icons/film.png', (req,res) => {
    res.sendFile('/icons/film.png', {root: __dirname});
});

app.get('/icons/headphones.png', (req,res) => {
    res.sendFile('/icons/headphones.png', {root: __dirname});
});

app.get('/icons/html.png', (req,res) => {
    res.sendFile('/icons/html.png', {root: __dirname});
});

app.get('/icons/css-3.png', (req,res) => {
    res.sendFile('/icons/css-3.png', {root: __dirname});
});

app.get('/icons/java-script.png', (req,res) => {
    res.sendFile('/icons/java-script.png', {root: __dirname});
});

app.get('/icons/c.png', (req,res) => {
    res.sendFile('/icons/c.png', {root: __dirname});
});

app.get('/icons/java.png', (req,res) => {
    res.sendFile('/icons/java.png', {root: __dirname});
});

app.get('/icons/node-js.png', (req,res) => {
    res.sendFile('/icons/node-js.png', {root: __dirname});
});

app.get('/icons/mysql-logo.png', (req,res) => {
    res.sendFile('/icons/mysql-logo.png', {root: __dirname});
});

app.get('/icons/mongo.png', (req,res) => {
    res.sendFile('/icons/mongo.png', {root: __dirname});
});

app.get('/icons/github.png', (req,res) => {
    res.sendFile('/icons/github.png', {root: __dirname});
});

app.get('/icons/telegram.png', (req,res) => {
    res.sendFile('/icons/telegram.png', {root: __dirname});
});

app.get('/icons/menuIcon.png', (req,res) => {
    res.sendFile('/icons/menuIcon.png', {root: __dirname});
});

app.get('/icons/closeIcon.png', (req,res) => {
    res.sendFile('/icons/closeIcon.png', {root: __dirname});
});

//server starts listening for any attempts from a client to connect at port: {port}
app.listen(port, () => {            
    console.log(`Now listening on port ${port}`); 
});
