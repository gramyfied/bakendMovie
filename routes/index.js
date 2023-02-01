var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');


const TMDBAPI = process.env.TMDB_API_KEY;


const API = '86a36a565c90905e678f3403efe73c0b';

router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API}`)
 .then(response => response.json())
 .then(data => {
   res.json({ movies: data.results });
 });
});

module.exports = router;