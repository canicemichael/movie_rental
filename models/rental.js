const mongoose = require("mongoose");
const { CustomerSchema } = require("./customer");
const Joi = require("joi");

const RentalSchema = new mongoose.Schema({
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

const Rental = mongoose.model('Rental', RentalSchema);

function validateRental(rental) {
    const schema = {
        customerId: Joi.objectId().required(),
        movieId: Joi.objectId().required()
    }
    return Joi.validate(rental, schema);
}

exports.RentalSchema = RentalSchema;
exports.Rental = Rental;
exports.validateRental = validateRental;