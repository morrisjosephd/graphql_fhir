module.exports = {
  dbURI: 'mongodb://localhost:27017/',
  dbName: 'phoenixFire',
  CORS: (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
  }
}
