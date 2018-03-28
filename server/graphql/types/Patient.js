const {GraphQLObjectType, GraphQLString} = require('graphql')

module.exports = new GraphQLObjectType({
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
