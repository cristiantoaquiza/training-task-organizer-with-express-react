import React, { useContext, useState } from 'react'
import TaskOrganizerContext from '../store/context'
import { addTask } from '../store/actions'

const TaskForm = () => {
  const [taskText, setTaskText] = useState('')
  const { dispatch } = useContext(TaskOrganizerContext)

  const handleSubmit = async () => {
    event.preventDefault()
    const response = await fetch('http://localhost:1313/tasks', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ text: taskText, completed: false })
    })
    const data = response.json()
    dispatch(addTask(data))
  }

  return (
    <form className="flex justify-center p-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-black border-solid border-2"
        onChange={(event) => setTaskText(event.target.value)}
        value={taskText}
      />
    </form>
  )
}

export default TaskForm
