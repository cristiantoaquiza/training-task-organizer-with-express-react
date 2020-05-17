import {
  SET_TASKS,
  ADD_TASK,
  REMOVE_TASK,
  SET_SELECTED_TASK,
  UPDATE_TASK
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.payload }
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] }
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload)
      }
    case SET_SELECTED_TASK:
      return { ...state, selectedTask: action.payload }
    case UPDATE_TASK: {
      const updatedIndex = state.tasks.findIndex(
        (task) => task._id === state.selectedTask._id
      )
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, updatedIndex),
          action.payload,
          ...state.tasks.slice(updatedIndex + 1)
        ]
      }
    }
    default:
      return state
  }
}

export default reducer
