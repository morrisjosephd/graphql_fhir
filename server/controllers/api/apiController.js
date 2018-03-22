const phoenixManager = require('../../managers/phoenix-manager')

module.exports.searchById = request => {
  const {id} = request.params

  return phoenixManager.getPhoenixDetails(id)
}

module.exports.savePhoenix = request => {
  const {id} = request.params
  const body = request.body

  return phoenixManager.savePhoenix(id, body)
}
