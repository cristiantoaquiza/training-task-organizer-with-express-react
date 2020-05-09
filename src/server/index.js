import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import connectDB from './dbConnector'

const app = express()
const port = 1313

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json())

app.get('/task', (req, res) => res.json({ tasks: ['task 1', 'task 2', 'task 3'] }))
app.post('/task', async (request, response) => {
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
app.listen(port)
