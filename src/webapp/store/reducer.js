import { GET_TASKS, ADD_TASK } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            _id: Math.floor(Math.random() * Math.floor(100)),
            text: action.payload,
            completed: false
          }
        ]
      }
    default:
      return state
  }
}

export default reducer
