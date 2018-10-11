var express = require('express')
var mongoose = require('mongoose')
var app = express()

//connect to database
mongoose.connect('mongodb://test:mladabosna999@ds125423.mlab.com:25423/movies')

//create a schema
var MovieSchema = new mongoose.Schema({
    title: String,
    genres: String,
    year: Number,
})

//create a model
var Movie = mongoose.model('Movie', MovieSchema)

app.post('/add', (req, res) => {
    
})


app.listen(3000)
console.log('listening to port 3000!')