const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello with Router')
})

module.exports = router