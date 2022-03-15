const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require('dotenv');
// dotenv.config();

// const port = process.env.PORT;
const { port } = require('./config');
console.log(`Your port is ${port}`);

const app = express();
// const PORT = 3000;




const customers = require('./routes/customers.js');
const movies = require('./routes/movies.js');
const users = require('./routes/users');

mongoose.connect("mongodb://localhost/movie_rental", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDb'))
.catch(err => console.error('Error!.. connection wasn\'t made... ', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/users', users);

app.get('/', (req, res) => {
    res.send('home page reached');
});


app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});