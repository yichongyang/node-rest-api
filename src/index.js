const http = require('http');
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};

// Create express object
const express = require('express')
const app = express()
const httpPort = 8080
const httpsPort = 8443

// Parse JSON using express
app.use(express.json())
app.use(express.urlencoded({extended: false}))

let movies = [{
    id: '1',
    title: 'Inception',
    director: 'Chris Nolan',
    release_date: '2010-07-16'
},
{
    id: '2',
    title: 'The Irisman',
    director: 'Martin Scorsese',
    release_date: '2019-09-27'
},
]

// Get the movie list
app.get('/movies', (req, res) => {
    res.json(movies)
})

// add movice to the list
app.post('/movies', (req, res) => {
    const movie = req.body
    console.log(movie)
    movies.push(movie)
    const title = '\"' + movie.title + '\"'
    res.send('Movie ' + title + ' is added to the list')
})

// search a movie in the list
app.get('/movies/:id', (req, res) => {
    const id = req.params.id

    for(let movie of movies){
        if(movie.id === id){
            res.json(movie)
            return
        }
    }
    res.status(404).send('Movie not found')
})

// remove movie from the list
app.delete('/movies/:id', (req, res) => {
    const id = req.params.id
    var title

    movies = movies.filter(movie => {
        if(movie.id !== id){
            return true
        }
        title = '\"' + movie.title + '\"'
        return false
    })

    if(typeof title === 'undefined'){
        res.send('Movie not found')
    }else{
        res.send('Movie ' + title + ' deleted')
    }
})

var httpsServer = https.createServer(options, app);
httpsServer.listen(httpsPort, () => {
  console.log("Server listening on https port : " + httpsPort)
});

var httpServer = http.createServer(app);
httpServer.listen(httpPort, () => {
  console.log("Server listening on http port : " + httpPort)
});