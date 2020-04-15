import React, {useContext} from 'react'
import OrganizerContext from "../store/context";

const Dashboard = () => {
  const {state: {tasks}} = useContext(OrganizerContext)
  return (
    <section>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.text}</li>)}
      </ul>
    </section>
  )
}

export default Dashboard