export const SET_TASKS = 'TASKORG.SET_TASKS'
export const ADD_TASK = 'TASKORG.ADD_TASK'
export const DELETE_TASK = 'TASKORG.DELETE_TASK'

export const setTasks = (tasks) => ({ type: SET_TASKS, payload: tasks })
export const addTask = (task) => ({ type: ADD_TASK, payload: task })
export const deleteTask = (taskId) => ({ type: DELETE_TASK, payload: taskId })
