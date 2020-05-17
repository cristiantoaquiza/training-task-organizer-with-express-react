export const SET_TASKS = 'TASKORG.SET_TASKS'
export const ADD_TASK = 'TASKORG.ADD_TASK'
export const REMOVE_TASK = 'TASKORG.REMOVE_TASK'
export const SET_SELECTED_TASK = 'TASKORG.SET_SELECTED_TASK'
export const UPDATE_TASK = 'TASKORG.UPDATED_TASK'

export const setTasks = (tasks) => ({ type: SET_TASKS, payload: tasks })
export const addTask = (task) => ({ type: ADD_TASK, payload: task })
export const removeTask = (taskId) => ({ type: REMOVE_TASK, payload: taskId })
export const setSelectedTask = (task) => ({
  type: SET_SELECTED_TASK,
  payload: task
})
export const updateTask = (task) => ({ type: UPDATE_TASK, payload: task })
