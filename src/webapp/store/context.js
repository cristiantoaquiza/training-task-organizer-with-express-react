import React from 'react'

const TaskOrganizerContext = React.createContext({
  tasks: [],
  selectedTask: {}
})

export default TaskOrganizerContext
