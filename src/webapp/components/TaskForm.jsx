import React, { useContext, useState, useEffect } from 'react'
import TaskOrganizerContext from '../store/context'
import { addTask, setSelectedTask, updateTask } from '../store/actions'
import { postTask, putTask } from '../apiClient'

const TaskForm = () => {
  const [taskText, setTaskText] = useState('')
  const {
    state: { selectedTask },
    dispatch
  } = useContext(TaskOrganizerContext)

  useEffect(() => {
    if (selectedTask.text) setTaskText(selectedTask.text)
  }, [selectedTask])

  const handleSubmit = async () => {
    event.preventDefault()
    if (selectedTask.text) {
      const updatedText = { text: taskText }
      await putTask(selectedTask._id, updatedText)
      const updatedTask = { ...selectedTask, ...updatedText }
      dispatch(updateTask(updatedTask))
    } else {
      const data = await postTask({ text: taskText, completed: false })
      dispatch(addTask(data))
    }
    setTaskText('')
    dispatch(setSelectedTask({}))
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
