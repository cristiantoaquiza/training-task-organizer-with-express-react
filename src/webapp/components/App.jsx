import React, { useContext, useReducer, useEffect } from 'react'
import TaskOrganizerContext from '../store/context'
import reducer from '../store/reducer'
import Dashboard from './Dashboard'
import { setTasks } from '../store/actions'

const App = () => {
  const initialState = useContext(TaskOrganizerContext)
  const [state, dispatch] = useReducer(reducer, initialState)

  const setTasksFromAPI = async () => {
    const response = await fetch('http://localhost:1313/tasks')
    const data = await response.json()
    dispatch(setTasks(data))
  }

  useEffect(() => {
    setTasksFromAPI()
  }, [])

  return (
    <TaskOrganizerContext.Provider value={{ state, dispatch }}>
      <Dashboard />
    </TaskOrganizerContext.Provider>
  )
}

export default App
