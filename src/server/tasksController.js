import connectDB from './dbConnector'
import { ObjectId } from 'mongodb'

export const getTasks = async (request, response) => {
  try {
    const db = await connectDB()
    const collection = db.collection('tasks')
    collection.find({}).toArray((err, tasks) => {
      if (err) response.status(400).send()
      response.json(tasks)
    })
  } catch (e) {
    console.error(`Server Error: ${e}`)
    response.status(500).send()
  }
}

export const addTask = async (request, response) => {
  const task = request.body
  try {
    const db = await connectDB()
    const collection = db.collection('tasks')
    const inserted = await collection.insertOne(task)
    response.json(inserted.ops[0])
  } catch (e) {
    console.error(`Server Error: ${e}`)
    response.status(500).send()
  }
}

export const updateTask = async (request, response) => {
  const { text, completed } = request.body
  const { taskId } = request.params
  try {
    const db = await connectDB()
    const collection = db.collection('tasks')
    if (text) {
      await collection.updateOne({ _id: ObjectId(taskId) }, { $set: { text } })
    }
    if (completed) {
      await collection.updateOne(
        { _id: ObjectId(taskId) },
        { $set: { completed } }
      )
    }
    response.status(200).send()
  } catch (e) {
    console.error(`Server Error: ${e}`)
    response.status(500).send()
  }
}

export const deleteTask = async (request, response) => {
  const { taskId } = request.params
  try {
    const db = await connectDB()
    const collection = db.collection('tasks')
    await collection.deleteOne({ _id: ObjectId(taskId) })
    response.status(200).send()
  } catch (e) {
    console.error(`Server Error: ${e}`)
    response.status(500).send()
  }
}
