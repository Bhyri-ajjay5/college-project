import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Courses from './components/Courses'
import Home from './components/Home'
import Projects from './components/Projects';
import Admission from './components/Admissions';
import Gallery from  './components/Gallery';
import Contact from './components/Contact'
import Navbar from './components/Navbar'
// import Home from './components/Home';


const App = () => {
  return (
   <>
   <Navbar />
   <Routes>
    <Route path='/'element={<Home /> } />
    <Route path='/Home'element={<Home /> } />
    <Route path='/About' element={<About />}/>
    <Route path ='/Courses' element={<Courses />} />
    <Route path='/Admissions' element={<Admission />} />
    <Route path='/Projects' element={<Projects />} />
    <Route path='/Gallery' element={<Gallery />} />
    <Route path='/Contact' element={<Contact />} />
   </Routes>
   </>
  )
}

export default App
