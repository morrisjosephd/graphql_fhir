const MongoClient = require('mongodb').MongoClient
const config = require('../config')

const mongoConnection = async (collection) => {
  const mongoConnection = await MongoClient.connect(config.dbURI)

  return mongoConnection.db(config.dbName).collection(collection)
}

module.exports.upsert = async (collection, id, doc) => {
  try {
    doc.id = id

    const db = await mongoConnection(collection)

    return await db.findOneAndUpdate({id: doc.id}, doc, {upsert: true})
  } catch (error) {
    console.log(error)
  }
}

module.exports.findOne = async (collection, id) => {
  try {
    const db = await mongoConnection(collection)

    const results = await db.find({id: id}).toArray()

    return results.length > 0 ? results[0] : { id }
  } catch (error) {
    console.log(error)
  }
}
