// const mongoService = require('../services/mongo')
const patientService = require('../services/patient-service')
const patientTransformer = require('../transformers/patient-transformer')
const flatmap = require('lodash.flatmap')

module.exports.searchForPatients = async (firstName, lastName) => {
  const response = await patientService.findByName(firstName, lastName)

  return findAll(response, 'Patient').map(patient => patientTransformer.convertToPatient(patient))
}

module.exports.getPatientDetails = async patientId => {
  const patientDetailsPromise = patientService.fetchPatientDetails(patientId)
  const patientConditionsPromise = patientService.fetchPatientConditions(patientId)

  const [patientResponse, conditionsResponse] = await Promise.all([patientDetailsPromise, patientConditionsPromise])

  const patientData = patientTransformer.convertToPatient(patientResponse, findAllConditions(conditionsResponse, 'Condition'))

  // mongoService.updateOrNewPatient('patient', patientData)

  return patientData
}

const findAll = (dataset, resourceType) => {
  return dataset.entry.filter(entry => entry.resource.resourceType === resourceType).map(entry => entry.resource)
}

const findAllConditions = (dataset, resourceType) => {
  const conditions = dataset.entry.filter(entry => entry.resource.resourceType === resourceType)

  return flatmap(conditions, findAllIcd10Codes)
}

const findAllIcd10Codes = (data) => {
  return data.resource.code.coding.filter(coding => coding.system.includes('urn:oid'))
}