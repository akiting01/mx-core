const { MongoClient, Db } = require('mongodb')
const MONGO_DB = require('../src/app.config').MONGO_DB

/**
 *
 * @param {(db: Db) => Promise<any>} cb
 */
async function bootstrap(cb) {
  const client = new MongoClient(`mongodb://${MONGO_DB.host}:${MONGO_DB.port}`)
  await client.connect()
  const db = client.db(MONGO_DB.dbName)

  await cb(db)

  await client.close()
  process.exit(0)
}

module.exports = exports.bootstrap = bootstrap