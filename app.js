var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose')
const Movie = require('./src/models/Movie')

var app = express()
app.use(bodyParser.json({ type: 'application/json'}))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
    res.json(Database)
})

app.post('/add', (req, res) => {
    Movie.create(req.body)
    res.send("item hopefully saved!")
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'))
})