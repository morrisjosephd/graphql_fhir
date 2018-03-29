const {GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql')
const patientManager = require('../../managers/patient-manager')

module.exports.Patient = new GraphQLObjectType({
  name: 'patient',
  description: 'patient meta data',
  fields: () => ({
    patientId: {
      type: GraphQLString,
      description: 'Patient id'
    },
    firstName: {
      type: GraphQLString,
      description: 'Patient first name'
    },
    lastName: {
      type: GraphQLString,
      description: 'Patient last name'
    },
    dob: {
      type: GraphQLString,
      description: 'Patient date of birth'
    },
    gender: {
      type: GraphQLString,
      description: 'Patient gender'
    },
    address: {
      type: Address,
      description: 'Patient home address'
    },
    phoneNumber: {
      type: PhoneNumber,
      description: 'Patient home phone number'
    }
  })
})

const Address = new GraphQLObjectType({
  name: 'address',
  description: 'mailing address',
  fields: () => ({
    line: {
      type: new GraphQLList(GraphQLString),
      description: 'Street address meta data'
    },
    city: {
      type: GraphQLString,
      description: 'City'
    },
    state: {
      type: GraphQLString,
      description: 'State'
    },
    postalCode: {
      type: GraphQLString,
      description: 'Postal Code'
    }
  })
})

const PhoneNumber = new GraphQLObjectType({
  name: 'phoneNumber',
  description: 'phone number',
  fields: () => ({
    use: {
      type: GraphQLString,
      description: 'type of phone number [home, work, etc]'
    },
    value: {
      type: GraphQLString,
      description: 'phone number'
    }
  })
})

module.exports.patientListResolver = async (root, args, context, info) => {
  const {firstName, lastName} = args

  let foundPatients = await patientManager.searchForPatients(firstName, lastName)

  return foundPatients
}

module.exports.patientResolver = async (root, args, context, info) => {
  let foundPatient = await patientManager.getPatientDetails(args.patientId)

  return foundPatient
}
