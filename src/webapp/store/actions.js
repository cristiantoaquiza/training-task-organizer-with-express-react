export const GET_TASKS = 'TASKORG.GET_TASKS'
export const ADD_TASK = 'TASKORG.ADD_TASK'

export const getTasks = (tasks) => ({ type: GET_TASKS, payload: tasks })
export const addTask = (text) => ({ type: ADD_TASK, payload: text })
