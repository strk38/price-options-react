import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
// import DaisyNav from './components/Navbar/DaisyNav/DaisyNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}


      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
