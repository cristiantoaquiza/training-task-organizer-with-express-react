import { useState, useEffect } from 'react'

const useAPI = (url, options = {}) => {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return data
}

export default useAPI
