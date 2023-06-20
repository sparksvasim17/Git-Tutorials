import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/common/Navbar'
import Hooks from './components/hooks/Hooks'
import Parent from './components/props/Parent'
import Main from './components/Group/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Navbar/>
      <Navbar/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/props' element={<Parent/>} />
        <Route path='/main' element={<Main/>} />
      </Routes>
    </>   
  )
}

export default App
