

import React from 'react'
import Home from './components/Home/Home'
import Signin from './components/Signin/Signin'
import Navbar from './components/Navbar/Navbar'
import Gyms from './components/Gyms/Gyms'
import AddGyms from './components/AddGyms/AddGyms'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element= {<Home/>}/>
        <Route path='/gyms' exact element={<Gyms/>}/>
        <Route path='/signin' exact element= {<Signin/>}/>
        <Route path='/addgyms' exact element= {<AddGyms/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
