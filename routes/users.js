const User = require("../models/user");
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();


router.get('/', async (req, res) => {
    const users = await User.findById
    
});

router.post('/', async (req, res) => {
    res.send('users post page');
})

module.exports = router;
