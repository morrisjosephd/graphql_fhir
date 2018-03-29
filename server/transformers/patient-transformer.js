module.exports.convertToPatient = (patient, conditions) => {
  let patientData = gatherBasicData(patient)
  patientData.conditions = gatherConditions(conditions)
  return patientData
}

const gatherBasicData = patient => {
  return {
    patientId: patient.id,
    firstName: patient.name[0].given[0],
    lastName: patient.name[0].family[0],
    dob: patient.birthDate,
    gender: patient.gender,
    address: patient.address && buildAddress(patient.address),
    phoneNumber: patient.telecom && buildPhoneNumber(patient.telecom)
  }
}

const buildAddress = addresses => {
  let homeAddress = addresses.filter((address) => address.use === 'home')[0]
  delete homeAddress.use
  delete homeAddress.country

  return homeAddress
}

const buildPhoneNumber = phoneNumbers => {
  return phoneNumbers.filter((phoneNumber) => phoneNumber.system === 'phone' && phoneNumber.use === 'home')[0]
}

const gatherConditions = conditions => {
  return conditions && conditions.map(condition => ({name: condition.display, code: condition.code}))
}