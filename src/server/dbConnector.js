import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017/task-organizer'
let db = null

const connectDB = async () => {
  if (db) return db
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
    db = client.db()
    return db
  } catch (e) {
    throw Error(`DB Error: ${e.message}`)
  }
}

export default connectDB
