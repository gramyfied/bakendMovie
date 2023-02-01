const dotenv = require("dotenv");
dotenv.config();

var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const TMDBAPI = process.env.TMDB_API_KEY;

router.get("/movies", async (req, res) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDBAPI}`)
    console.log(response)
    const data = await response.json();
    console.log(data)
    res.json({ movies: data.results });
  } catch(err) {
    console.error(err);
  }
  return res.json(data);
});

module.exports = router;
