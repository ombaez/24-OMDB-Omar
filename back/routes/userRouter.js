const express = require('express');
const router = express.Router();
const { User } = require('../models/User')

router.post('/add', (req, res) => {
  User.create({ email: 'ombaez@gmail.com', password: 'pass1234' })
    .then(user => res.send(user))
})

router.get('/listAll', function (req, res) {
  User.findAll()
    .then(data => res.send(data))
})


//   router.post('/user/login:id', (req, res) => {
//     console.log(req.body, req.params)
// })

// router.post('/add', function (req, res) {
//   console.log(req.body)
//   //   User.find({email: 'ombaez@gmail.com', password:'pass1234'})
//   //     .then(user => res.send(user))
//   // })
// })

module.exports = router
