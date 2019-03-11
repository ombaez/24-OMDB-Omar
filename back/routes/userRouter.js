const express = require('express');
const router = express.Router();
const User = require ('../models/User')
const templates = require('../public/templates')

router.post('/users', (req, res) => {
    User.create(req.body)
      .then(user => res.send(user))
  })


  
//   router.get('/', (req, res) => {
//     res.send(templates.index(req.user))
//   })

  router.post('/userReg/login', (req, res) => {
    console.log(req.body)
})

//   router.get('/register', (req, res) => {
//     res.send(templates.register(req.user))
//   })


  module.exports = router