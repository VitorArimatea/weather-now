import React from "react"
import { useState } from "react"
import fetchData from "./services/api"

import Card from './components/Card'

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

    fetchData(city).then((response) =>{
      setData(response)
    })
  }
  
  return (
      <div className="flex flex-col w-screen	h-screen items-center justify-center bg-sky-200">
          <form
              onSubmit={handleSubmit}
              className="flex flex-col items-around justify-center h-1/6 rounded-3xl"
          >
              <input
                  className="rounded-2xl p-2 outline-0"
                  type="text"
                  placeholder="Cidade"
                  value={city}
                  onChange={({ target: { value } }) => setCity(value)}
              />

              <button
                  type="submit"
                  className="text-stone-50 mt-2.5 bg-blue-600 rounded-2xl p-1 hover:bg-blue-700 ease-in  duration-200"
              >
                  Pesquisar
              </button>
          </form>

          <Card data={data} />
      </div>
  )
}

export default App
