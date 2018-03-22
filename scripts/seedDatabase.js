const MongoClient = require('mongodb').MongoClient
const faker = require('faker')

const DB_URI = 'mongodb://localhost:27017'

let mongoConnection, db

const generatePhoenix = () => {
  return {
    id: faker.random.number(),
    name: faker.fake("{{name.firstName}} {{name.lastName}}"),
    color: faker.random.arrayElement(['red', 'blue', 'green']),
    isAlive: faker.random.boolean()
  }
}

const saveDocument = async (doc) => {
  mongoConnection = mongoConnection || await MongoClient.connect(DB_URI)
  db = db || mongoConnection.db('phoenixFire').collection('phoenix')

  await db.insertOne(doc)
}

const generateEntries = async numberOfEntries => {
  for (let i = 0; i < numberOfEntries; i++) {
    await saveDocument(generatePhoenix())
  }

  await mongoConnection.close();
}

generateEntries(process.argv[2])
