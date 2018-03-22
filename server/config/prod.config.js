module.exports = {
  dbURI: 'mongodb://localhost:27017/',
  dbName: 'phoenixFire',
  CORS: (req, res, next) => {
    next()
  }
}
