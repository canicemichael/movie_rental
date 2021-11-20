const mongoose = require("mongoose");
const Joi = require("joi");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 6,
        maxlength: 50,
        required: true
    },
    phone: {
        type: String,
        maxlength: 15,
        minlength: 11,
        required: true
    },
    isVip: {
        type: Boolean,
        default: false
    }
});

const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customer){
    const schema = {
        name: Joi.string().min(6).max(50).required(),
        phone: Joi.string().min(11).max(15).required(),
        isVip: Joi.boolean().default(false)
    }
    return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validateCustomer = validateCustomer;