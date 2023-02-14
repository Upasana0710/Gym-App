import './Style.css'
import {NavLink} from 'react-router-dom';
import React from 'react'

const Navbar = () => {
  return(
    <div className="container">
      <div className="contents">
        <NavLink className="link"to='/'>
            Home
        </NavLink>
        <NavLink className="link"to='/signin'>
            Gyms
        </NavLink>
        <NavLink className="link"to='/signin'>
            <button className="signin-button">Sign In</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar