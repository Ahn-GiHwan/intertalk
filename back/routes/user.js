const express = require('express')

const router = express.Router()

router.post('/logout', (req, res, next) => {
  res.status(200).send('ok')
})

router.post('/login', (req, res, next) => {
  res.status(200).send('ok')
}) // /user/login

router.post('/', async (req, res, next) => {
  res.status(201).send('ok')
})

module.exports = router
