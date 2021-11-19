import mongoose from "mongoose";

export const movieTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        maxlength: 25,
        required: true
    }
});

export const MovieType = mongoose.model('MovieType', movieTypeSchema);

