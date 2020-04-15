import React, {useContext, useReducer} from 'react'
import OrganizerContext from "../store/context";
import reducer from "../store/reducer";
import Dashboard from "./Dashboard";

const App = () => {
  const initialState = useContext(OrganizerContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <OrganizerContext.Provider value={{state, dispatch}}>
      <Dashboard/>
    </OrganizerContext.Provider>
  )
}

export default App