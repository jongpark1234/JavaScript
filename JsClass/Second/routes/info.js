const express = require('express')
const router = express.Router()
const img = require('./img.jpg')

router.get('/', (req, res) => {
    res.send(img)
})

module.exports = router