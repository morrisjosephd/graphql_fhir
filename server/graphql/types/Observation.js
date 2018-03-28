const {GraphQLObjectType, GraphQLString, GraphQLInt} = require('graphql')

module.exports = new GraphQLObjectType({
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
