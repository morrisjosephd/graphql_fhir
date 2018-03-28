const app = require('express')()
const graphqlHTTP = require('express-graphql')
const logger = require('morgan')
const {schema} = require('./graphql/schema/Schema')

app.use(logger('dev'))
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(4001, () => console.log('Listening on port 4001'))

module.exports = app
