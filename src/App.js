

import React from 'react'
import Home from './components/Home/Home'
import Signin from './components/Signin/Signin'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element= {<Home/>}/>
        <Route path='/signin' exact element= {<Signin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
