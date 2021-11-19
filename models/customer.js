import mongoose from "mongoose";

export const CustomerSchema = new mongoose.Schema({
    userName: {
        type: String,
        maxlength: 50,
        minlength: 6,
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

export const Customer = mongoose.model('Customer', CustomerSchema);

