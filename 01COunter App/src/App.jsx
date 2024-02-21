import { useState } from 'react'
import './App.css'

function App() {

const [Counter, count ] = useState(0)
//  let Counter =15
    const addvalue = () => 
    {
      count(Counter + 1)
    }
    const subvalue= () => 
    {
      count(Counter -1)
    }


  return (
    <>
      <h1>React Counter App</h1>
      <button onClick={addvalue}>Add Value</button> 
      <button on onClick={subvalue}>Remove Value</button>
      <p>Realtime Counter:{Counter} </p>
    </>
  )
}

export default App
