import Customer from "../models/customer.js";
import mongoose from "mongoose";
import express from "express";

const router = express.Router();

//only admins are allowed to get all customers
router.get('/', (req, res) => {
    res.send('return all customers');
});


// module.exports = router;
export default router;
