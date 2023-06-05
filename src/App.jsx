import React from "react"
import { useState } from "react"
import fetchData from "./services/api"
import initialData from "./halpers/initialData"

import Card from './components/Card'

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState(initialData)

  const handleSubmit = (event) => {
    event.preventDefault()

    fetchData(city).then((response) =>{
      setData(response)
    })
  }
  
  return (
      <div className="flex flex-col w-screen h-screen items-center bg-sky-400">

          <main className="h-screen w-screen flex flex-col justify-center items-center">
              <form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-center h-1/6 w-3/6 rounded-3xl"
              >
                  <input
                      className="rounded-2xl p-2 outline-0 shadow-2xl"
                      type="text"
                      placeholder="Cidade"
                      value={city}
                      onChange={({ target: { value } }) => setCity(value)}
                  />

                  <button
                      type="submit"
                      className="text-stone-50 mt-2.5 bg-blue-600 rounded-2xl p-1 shadow-xl hover:bg-blue-700 ease-in  duration-200"
                  >
                      Pesquisar
                  </button>
              </form>

              <Card data={data} />
          </main>
      </div>
  )
}

export default App
