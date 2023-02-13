const express = require('express');
const router = express.Router();
// controllers
const searchController = require('./controllers/searchController');


// Page d'accueil
router.get('/', searchController.index);




module.exports = router;