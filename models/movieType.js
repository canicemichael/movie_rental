const mongoose = require("mongoose");
const Joi = require("joi");

const movieTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 6,
        maxlength: 25,
        required: true
    }
});

const MovieType = mongoose.model('MovieType', movieTypeSchema);

function validateMovieType(movieType){
    const schema = {
        name: Joi.string().min(6).max(25).required()
    }
    return Joi.validate(movieType, schema);
}

exports.movieTypeSchema = movieTypeSchema;
exports.MovieType = MovieType;
exports.validateMovieType = validateMovieType;