const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} = require('graphql')

const {Patient, patientResolver} = require('../types/Patient')
const {Observation, observationResolver} = require('../types/Observation')

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
        resolve: patientResolver
      },
      observation: {
        type: Observation,
        resolve: observationResolver
      }
    }
  })
})
