import React, { useContext } from 'react'
import Task from './Task'
import TaskOrganizerContext from '../store/context'

const TaskList = () => {
  const {
    state: { tasks }, dispatch
  } = useContext(TaskOrganizerContext)

  return (
    <section>
      <h1 className="text-bold">{tasks.length} Tasks</h1>
      <ul className="list-reset text-white p-0">
        {tasks.map((task) => (
          <li
            className="flex items-center bg-orange-700 border-black border-dashed border-2 my-2 py-4"
            key={task._id}
          >
            <Task task={task} dispatch={dispatch} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TaskList
