const fetch = require('../services/epic-api')
// const mongoService = require('../services/mongo')

const patientNameSpace = 'Patient'
const conditionsNameSpace = `Condition?patient=`

module.exports.fetchPatientDetails = async patientId => {
  const api = `${patientNameSpace}/${patientId}`

  const response = await fetch('GET', api)

  // mongoService.save('FHIR_Audit', {apiCall: api, response})

  return response
}

module.exports.fetchPatientConditions = async patientId => {
  const api = `${conditionsNameSpace}${patientId}`

  const response = await fetch('GET', api)

  // mongoService.save('FHIR_Audit', {apiCall: api, response})

  return response
}

module.exports.findByName = async (firstName, lastName) => {
  const api = `${patientNameSpace}?family=${lastName}&given=${firstName}`

  let response = await fetch('GET', api)

  // mongoService.save('FHIR_Audit', {apiCall: api, response})

  return response
}
