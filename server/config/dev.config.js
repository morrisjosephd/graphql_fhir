module.exports = {
  epicBaseURL: 'https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/',
  dbURI: 'mongodb://localhost:27017/',
  dbName: 'mednax',
  CORS: (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
  }
}
