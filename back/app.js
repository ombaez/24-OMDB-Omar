const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const axios = require('axios')
var path = require('path');
var morgan = require('morgan')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

var port = 3000
app.use(express.static(path.resolve(__dirname, 'public')))

app.use(function (req, res, next) {

    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }

});

app.get('/?titulo=:titulo', function (req, res) {
    axios.get('https://www.omdbapi.com/?apikey=20dac387&s=' + req.body.titulo)
        .then(search =>
            res.send(search.data))
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + './public/index.html')
});


// app.get('/batman', function (req, res) {
//     axios.get('https://www.omdbapi.com/?apikey=20dac387&s=batman')
//         .then(search =>
//             res.send(search.data))
// })

app.listen(port, function () {
    console.log('Listening on', port)
})

