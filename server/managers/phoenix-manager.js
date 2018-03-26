const mongoService = require('../services/mongo')

module.exports.getPhoenixDetails = async id => {
  const foundPhoenix = await mongoService.findOne('phoenix', id)
  delete foundPhoenix._id
  return foundPhoenix
}

module.exports.savePhoenix = async (id, data) => {
  return mongoService.upsert('phoenix', id, data)
}
