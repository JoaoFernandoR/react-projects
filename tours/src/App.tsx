import React, { useEffect, useState } from 'react'
import api from './services/api'
import './App.scss'
import TourList from './components/TourList'
import Loading from './components/Loading'

interface Data {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
}

const App = () => {

  const [ApiData, setApiData] = useState<Data[]>([])

  useEffect(() => {
    api.get('')
    .then((result) => setApiData(result.data))
    .catch((error) => console.log(error))
  }, [])

  const handleDeleteTour = (id: string) => {
      const newArray = ApiData.filter( (item) => item.id !== id)
      setApiData(newArray)
  }

  if (ApiData.length === 0) {
    return (
      <Loading />
    )
  } else {
    return (
      <section id="app">
        <div className="container">
          <h1> Our tours </h1>
          <div className="blueline"></div>
          { ApiData.map(item => {
            return  <TourList item={item} key={item.id} delete={handleDeleteTour}/> 
          })}
        </div>
      </section>

    )
  }
}

export default App