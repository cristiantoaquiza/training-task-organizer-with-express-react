import React, { useContext, useState } from 'react'
import TaskOrganizerContext from '../store/context'
import { addTask } from '../store/actions'

const TaskForm = () => {
  const [taskText, setTaskText] = useState('')
  const { dispatch } = useContext(TaskOrganizerContext)

  const handleSubmit = () => {
    event.preventDefault()
    dispatch(addTask(taskText))
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
