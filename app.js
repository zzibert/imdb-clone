var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose')
const Movie = require('./src/models/Movie')

var app = express()

mongoose.Promise = global.Promise

mongoose.connect('mongodb://kvajsvem2:nekineki999@ds131743.mlab.com:31743/movies', { useNewUrlParser: true })

app.use(bodyParser.json({ type: 'application/json'}))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
    Movie.find({}).then(data => {
        res.send(data)
    })
})

app.post('/query', (req, res) => {
    let query = {}
    for(let prop in req.body){
        if(req.body[prop] != '')
            query[prop] = req.body[prop]
    }
    Movie.find(query).then(data => res.send(data))
})

app.post('/add', (req, res) => {
    console.log(req.body)
    Movie.create(req.body).catch(err => console.log(req.body.title + " was not succesfully saved: " + err))
    res.send(req.body.title + " was succesfully saved!")
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'))
})