import React from 'react'
import PropTypes from 'prop-types'
import { removeTask, setSelectedTask } from '../store/actions'
import { deleteTask } from '../apiClient'

const Task = ({ task, dispatch }) => {
  const { _id, text } = task

  const handleDelete = async () => {
    await deleteTask(_id)
    dispatch(removeTask(_id))
  }

  const handleEdit = async () => {
    dispatch(setSelectedTask(task))
  }

  return (
    <>
      <span className="flex-1 cursor-pointer">{text}</span>
      <button onClick={handleEdit}>
        <img
          src="https://icon.now.sh/edit/0050c5"
          alt="Edit icon"
          className="h-6"
        />
      </button>
      <button onClick={handleDelete}>
        <img
          src="https://icon.now.sh/delete/8b0000"
          alt="Delete icon"
          className="h-6"
        />
      </button>
    </>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default Task
