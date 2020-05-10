import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { getTasks, addTask, updateTask } from './tasksController'

const app = express()
const port = 1313

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json())

app.get('/tasks', getTasks)
app.post('/tasks', addTask)
app.put('/tasks/:taskId', updateTask)

app.listen(port)
