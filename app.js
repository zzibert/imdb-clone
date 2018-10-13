var express = require('express')
var bodyParser = require('body-parser')
var Database = require('./database.json')
var cors = require('cors')

var app = express()
app.use(bodyParser.json({ type: 'application/json'}))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
    res.json(Database)
})

app.post('/todo', (req, res) => {
    console.log(req.body)
    res.end('')
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'))
})