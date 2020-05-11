import { GET_TASKS } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    default:
      return state
  }
}

export default reducer
