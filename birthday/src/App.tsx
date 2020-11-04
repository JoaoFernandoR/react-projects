import React, { useState } from 'react'
import { data } from './mockData/data'
import PeopleItem from './components/PeopleItem'

import './App.scss'

interface DataProps {
  id : number;
  image: string;
  age : Number;
  name : string
}

const App = () => {

  const [myData, setMyData] = useState<DataProps[]>(data)

  const handleList = () => {
    return (
     myData.map(item => {
        return (
          <PeopleItem item={item} />
        )
      })
    )
  }
  return (
    <section id="app">
      <div className="container">
        <h1> {myData.length} birthdays today </h1>
        {handleList()}
        <button className="mybutton" onClick={() => setMyData([])}> Clear All </button>
      </div>
    </section>
  )
}

export default App