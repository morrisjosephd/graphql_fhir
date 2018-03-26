const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config')

const index = require('./routes/index')

let app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))

app.all('*', config.CORS)

app.use('/api', require('./routes/api'))
app.use('/', index)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.json({message: 'error'})
})

module.exports = app
