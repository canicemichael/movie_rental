import mongoose from "mongoose";
import { CustomerSchema } from "./customer.js";
import Joi from "joi";

export const RentalSchema = new mongoose.Schema({
    customer: {
        type: CustomerSchema,
        required: true
    },
    movie: {
        type: new mongoose.Schema({
            title: String,
            minlength: 6,
            maxlength: 25,
        }),
        required: true
    },
    rentalFee: {
        type: Number,
        min: 0
    }
});

export const Rental = mongoose.model('Rental', RentalSchema);

export function validateRental(rental) {
    const schema = {
        customerId: Joi.objectId().required(),
        movieId: Joi.objectId().required()
    }
}