import React, { useEffect, useState } from 'react'
import Navbar2 from "./Navbar2"
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import Search from "./Search"
import Student from './Student';
import Contact from './Contact';
import Updatestudent from './Updatestudent';

export default function App() {
  return (
    <>
      <div>
        {/* <Navbar2 /> */}

      </div>

      <BrowserRouter>
        <Navbar2 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Contact' element={<Contact />} />

          <Route path='/Student' element={<Student />} />
          <Route path='/update/:id' element={<Updatestudent/>} />

        </Routes>
      </BrowserRouter>

    </>
  )
}
