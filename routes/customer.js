import { Customer, CustomerSchema } from "../models/customer.js";
import mongoose from "mongoose";
import express from "express";

const router = express.Router();

//only admins are allowed to get all customers
router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

router.post('/', async (req, res) => {
    let newCustomer = new Customer({
        name: req.body.userName,
        phone: req.body.phone,
        isVip: req.body.isVip
    });

    newCustomer = await newCustomer.save();
    res.send(newCustomer);
})


// module.exports = router;
export default router;
