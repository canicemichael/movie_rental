import mongoose from "mongoose";
import { MovieType, movieTypeSchema } from "./movieType";

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