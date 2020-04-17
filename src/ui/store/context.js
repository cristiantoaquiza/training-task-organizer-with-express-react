import React from 'react'

const OrganizerContext = React.createContext({
  tasks: [
    { id: 1, text: 'Breakfast', completed: false },
    { id: 2, text: 'Do laundry', completed: false },
    { id: 3, text: 'Brush teeth', completed: false },
    { id: 4, text: 'Sleep', completed: false }
  ]
})

export default OrganizerContext
