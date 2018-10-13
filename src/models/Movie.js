const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genres: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

const Movie = mongoose.model('movie', MovieSchema)

module.exports = Movie