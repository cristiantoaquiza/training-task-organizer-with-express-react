import React from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

const Dashboard = () => {
  return (
    <section className="container mx-auto max-w-md text-center font-mono">
      <TaskForm />
      <TaskList />
    </section>
  )
}

export default Dashboard
