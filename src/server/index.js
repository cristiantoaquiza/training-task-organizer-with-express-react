import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import connectDB from './dbConnector'
import { ObjectId } from 'mongodb'

const app = express()
const port = 1313

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json())

app.get('/tasks', (req, res) => res.json({ tasks: ['task 1', 'task 2', 'task 3'] }))
app.post('/tasks', async (request, response) => {
  const { task } = request.body
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
