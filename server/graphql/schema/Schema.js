const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} = require('graphql')

const axios = require('axios')
const Patient = require('../types/Patient')
const Observation = require('../types/Observation')

module.exports.schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      patient: {
        type: Patient,
        args: {
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: async (root, args, context, info) => {
          const {firstName, lastName} = args
          let foundPatient = await axios.get(`https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Patient?family=${lastName}&given=${firstName}`)
          let patient = {}
          patient.firstName = firstName
          patient.lastName = lastName
          patient.fullName = `${firstName} ${lastName}`
          patient.patientId = foundPatient.data.entry[0].resource.id

          return patient
        }
      },
      observation: {
        type: Observation,
        resolve: async (root, args, context, info) => {
          let foundObservations = await axios.get(`https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Observation?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB&category=vital-signs`)
          let latestObservation = foundObservations.data.entry[0].resource
          let observation = {};
          observation.type = latestObservation.code.text
          observation.date = latestObservation.effectiveDateTime
          observation.systolic = latestObservation.component[0].valueQuantity.value
          observation.diastolic = latestObservation.component[1].valueQuantity.value

          return observation
        }
      }
    }
  })
})
