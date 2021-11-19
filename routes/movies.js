import express from "express";
import { Movie } from "../models/movie.js";
import { MovieType } from "../models/movieType.js";

const router = express.Router();

router.get("/", (req, res) => {
    const genres = Movie.find().sort('name');

    //return all the genres with the "name" in the movie collection
    res.send(genres);
});

router.post('/', async (req, res) => {
    const movieType = await MovieType.findById(req.body.movieTypeId);
    if (!movieType) return res.status(400).send('Invalid movieType');

    let newMovie = new Movie({
        title: req.body.title,
        movieType: {
            _id: movieType._id,
            name: movieType.name
        }
    });
    newMovie.save();
    res.send(newMovie);
})

export default router;