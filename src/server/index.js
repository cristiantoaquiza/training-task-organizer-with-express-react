import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import connectDB from './dbConnector'
import { ObjectId } from 'mongodb'

const app = express()
const port = 1313

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json())

app.get('/tasks', async (request, response) => {
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
})

app.post('/tasks', async (request, response) => {
  const task = request.body
  try {
    const db = await connectDB()
    const collection = db.collection('tasks')
    await collection.insertOne(task)
    response.status(200).send()
  } catch (e) {
    console.error(`Server Error: ${e}`)
    response.status(500).send()
  }
})

app.put('/tasks/:taskId', async (request, response) => {
  const { title, completed } = request.body
  const { taskId } = request.params
  try {
    const db = await connectDB()
    const collection = db.collection('tasks')
    if (title) {
      collection.updateOne({ _id: ObjectId(taskId) }, { $set: { title } })
    }
    if (completed) {
      collection.updateOne({ _id: ObjectId(taskId) }, { $set: { completed } })
    }
    response.status(200).send()
  } catch (e) {
    console.error(`Server Error: ${e}`)
    response.status(500).send()
  }
})

app.listen(port)
