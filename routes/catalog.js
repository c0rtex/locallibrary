var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var book_instance_controller = require('../controllers/bookinstanceController');
var genre_controller = require('../controllers/genreController');