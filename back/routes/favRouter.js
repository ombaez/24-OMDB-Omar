const express = require('express');
const router = express.Router();
const { User } = require ('../models/User')
const { Favourites } = require('../models/Favourites')
const templates = require('../public/templates')

router.post('/', (req, res) => {
    Favourites.create(req.body)
      .then(fav => res.send(fav))
  })

router.get('/listAll', function (req,res){
    Favourites.findAll()
    .then(data=>res.send(data))
})
  

  module.exports = router