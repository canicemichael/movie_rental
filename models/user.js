import mongoose from "mongoose";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

export const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 6,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        minlength: 6,
        maxlength: 255,
        required: true,
        unique: true
    },
    password: {
        type:String,
        minlength: 8,
        maxlength: 26,
        required: true
    },
    isAdmin: Boolean
})

export const User = mongoose.model('User', userSchema);

export function validateUser(user) {
    const schema = {
        name: Joi.string().min(6).max(50).required(),
        email: Joi.string().min(6).max(255).required(),
        password: new passwordComplexity({
            min: 8,
            max: 26,
            lowerCase: 1,
            upperCase: 1,
            numeric: 1,
            symbol: 1,
            requirementCount: 4
        }),
    }
    
    return Joi.validate(user, schema);
}