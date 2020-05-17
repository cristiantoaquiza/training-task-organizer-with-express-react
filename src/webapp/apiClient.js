const TASK_API_URL = 'http://localhost:1313/tasks'

export const getTasks = async () => {
  const response = await fetch('http://localhost:1313/tasks')
  const data = await response.json()
  return data
}

export const postTask = async (task) => {
  const response = await fetch(TASK_API_URL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(task)
  })
  const data = await response.json()
  return data
}

export const putTask = async (taskId, newData) => {
  await fetch(`${TASK_API_URL}/${taskId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(newData)
  })
}

export const deleteTask = async (taskId) => {
  await fetch(`${TASK_API_URL}/${taskId}`, { method: 'DELETE' })
}
