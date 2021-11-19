import mongoose from "mongoose";
import { MovieType, movieTypeSchema } from "./movieType.js";
import Joi from "joi";


export const movieSchema = new mongoose.Schema({
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

export const Movie = mongoose.model('Movie', movieSchema);

export function validateMovie(movie){
    const schema = {
        title: Joi.string().min(6).max(25).required(),
        movieTypeId: Joi.objectId().required()
    }
    
    return Joi.validate(movie, schema);
}