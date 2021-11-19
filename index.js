import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

import customer from './routes/customers.js';
import movie from './routes/movies.js';

mongoose.connect("mongodb://localhost/movie_rental", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDb'))
.catch(err => console.error('Error!.. connection wasn\'t made... ', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/customer', customer);
app.use('/api/movie', movie);

app.get('/', (req, res) => {
    res.send('home page reached');
})


app.listen(PORT, ()=>{
    console.log(`listening to port ${3000}`);
});