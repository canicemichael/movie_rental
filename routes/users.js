import User from "../models/user.js";
import express from "express";

const router = express.Router();


router.get('/', async (req, res) => {
    res.send('users page');
});

router.post('/', async (req, res) => {
    res.send('users post page');
})

export default router;
