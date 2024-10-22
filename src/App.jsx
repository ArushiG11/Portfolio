import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home,
  About,
  Projects,
  Contact } from "./pages"; 

const App = () => {
  return (
    <main className='bg-slate-300'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
