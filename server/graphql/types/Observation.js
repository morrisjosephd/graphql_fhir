const {GraphQLObjectType, GraphQLString, GraphQLInt} = require('graphql')
const axios = require('axios')

module.exports.Observation = new GraphQLObjectType({
  name: 'observation',
  description: 'patient observations',
  fields: () => ({
    type: {
      type: GraphQLString,
      description: 'Type of observation'
    },
    date: {
      type: GraphQLString,
      description: 'Date / Time of observation'
    },
    systolic: {
      type: GraphQLInt,
      description: 'Systolic blood pressure'
    },
    diastolic: {
      type: GraphQLInt,
      description: 'Diastolic blood pressure'
    }
  })
})

module.exports.observationResolver = async (root, args, context, info) => {
  let foundObservations = await axios.get(`https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Observation?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB&category=vital-signs`)
  let latestObservation = foundObservations.data.entry[0].resource
  let observation = {};
  observation.type = latestObservation.code.text
  observation.date = latestObservation.effectiveDateTime
  observation.systolic = latestObservation.component[0].valueQuantity.value
  observation.diastolic = latestObservation.component[1].valueQuantity.value

  return observation
}
