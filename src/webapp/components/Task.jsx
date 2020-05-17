import React from 'react'
import PropTypes from 'prop-types'
import { deleteTask } from '../store/actions'

const Task = ({ task, dispatch }) => {
  const { _id, text } = task

  const handleDelete = async () => {
    await fetch(`http://localhost:1313/tasks/${_id}`, { method: 'DELETE' })
    dispatch(deleteTask(_id))
  }

  return (
    <>
      <span className="flex-1 cursor-pointer">{text}</span>
      <button>
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
