const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList
} = require('graphql')

const {Patient, patientListResolver, patientResolver} = require('../types/Patient')
const {Observation, observationResolver} = require('../types/Observation')

module.exports.schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      patientList: {
        type: new GraphQLList(Patient),
        args: {
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: patientListResolver
      },
      patient: {
        type: Patient,
        args: {
          patientId: {
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
