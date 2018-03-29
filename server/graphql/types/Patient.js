const {GraphQLObjectType, GraphQLString} = require('graphql')
const axios = require('axios')

module.exports.Patient = new GraphQLObjectType({
  name: 'patient',
  description: 'patient meta data',
  fields: () => ({
    firstName: {
      type: GraphQLString,
      description: 'The patients first name'
    },
    lastName: {
      type: GraphQLString,
      description: 'The patients last name'
    },
    fullName: {
      type: GraphQLString,
      description: 'The patients full name'
    },
    patientId: {
      type: GraphQLString,
      description: 'The patients id'
    }
  })
})

module.exports.patientResolver = async (root, args, context, info) => {
  const {firstName, lastName} = args
  let foundPatient = await axios.get(`https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Patient?family=${lastName}&given=${firstName}`)
  let patient = {}
  patient.firstName = firstName
  patient.lastName = lastName
  patient.fullName = `${firstName} ${lastName}`
  patient.patientId = foundPatient.data.entry[0].resource.id

  return patient
}
