import { useState, useEffect } from 'react'

const useAPI = (url) => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return data
}

export default useAPI
