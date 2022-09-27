const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const helloRouter = require('./routes/hello')
const infoRouter = require('./routes/info')

app.use('/', indexRouter)
app.use('/hello', helloRouter)
app.use('/info', infoRouter)

module.exports = app