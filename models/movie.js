const mongoose = require("mongoose");
const { MovieType, movieTypeSchema } = require("./movieType");
const Joi = require("joi");


const movieSchema = new mongoose.Schema({
    //what will our movie property be
    //the title of the movie
    title: {
        type:String,
        minlength: 6,
        maxlength: 25,
        required: true
    },
    movieType: {
        type: movieTypeSchema,
        required: true
    }
});

const Movie = mongoose.model('Movie', movieSchema);

function validateMovie(movie){
    const schema = {
        title: Joi.string().min(6).max(25).required(),
        movieTypeId: Joi.objectId().required()
    }
    
    return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validateMovie = validateMovie;