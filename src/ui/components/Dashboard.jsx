import React from 'react'

const tasks = [
  {id: 1, text: 'Breakfast', completed: false},
  {id: 2, text: 'Do laundry', completed: false},
  {id: 3, text: 'Brush teeth', completed: false},
  {id: 4, text: 'Sleep', completed: false}
]

export const Dashboard = () => {
  return (
    <section>
      <h2>ToDO</h2>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.text}</li>)}
      </ul>
    </section>
  )
}