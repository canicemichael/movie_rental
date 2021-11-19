import mongoose from "mongoose";
import Joi from "joi";

export const movieTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 6,
        maxlength: 25,
        required: true
    }
});

export const MovieType = mongoose.model('MovieType', movieTypeSchema);

export function validateMovieType(movieType){
    const schema = {
        name: Joi.string().min(6).max(25).required()
    }
    return Joi.validate(movieType, schema);
}