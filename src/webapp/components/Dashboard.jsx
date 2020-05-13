import React, { useContext } from 'react'
import TaskOrganizerContext from '../store/context'
import TaskForm from './TaskForm'

const Dashboard = () => {
  const {
    state: { tasks }
  } = useContext(TaskOrganizerContext)

  return (
    <section className="container mx-auto max-w-md text-center font-mono">
      <TaskForm />
      <h1 className="text-bold">{tasks.length} Tasks</h1>
      <ul className="list-reset text-white p-0">
        {tasks.map((task) => (
          <li
            className="flex items-center bg-orange-700 border-black border-dashed border-2 my-2 py-4"
            key={task._id}
          >
            <span className="flex-1 cursor-pointer">{task.text}</span>
            <button>
              <img
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit icon"
                className="h-6"
              />
            </button>
            <button>
              <img
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete icon"
                className="h-6"
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Dashboard
