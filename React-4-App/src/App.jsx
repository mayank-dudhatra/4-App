import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Meals from './Components/Meals/Meals.jsx'
import Cocktails from './Components/Cocktails/Cocktails.jsx';
import Potter from './Components/Potter/Potter.jsx';
import IndianBanks from './Components/Indian Banks/IndianBank.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Wheater from './Components/Wheather.jsx'
import Stock from './Components/Stocks.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        {/* <Wheater /> */}
        {/* <Stock /> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/meals' element={<Meals/>} />
          <Route path='/cocktails' element={<Cocktails/>} />
          <Route path='/potter' element={<Potter/>} />
          <Route path='/indianbanks' element={<IndianBanks/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
