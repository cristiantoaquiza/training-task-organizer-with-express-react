import React, { useContext, useReducer, useEffect } from 'react'
import TaskOrganizerContext from '../store/context'
import reducer from '../store/reducer'
import Dashboard from './Dashboard'
import useAPI from '../hooks/useAPI'
import { getTasks } from '../store/actions'

const App = () => {
  const initialState = useContext(TaskOrganizerContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  const savedTasks = useAPI('http://localhost:1313/tasks')

  useEffect(() => {
    dispatch(getTasks(savedTasks))
  }, [savedTasks])

  return (
    <TaskOrganizerContext.Provider value={{ state, dispatch }}>
      <Dashboard />
    </TaskOrganizerContext.Provider>
  )
}

export default App
