import './Style.css'
import React, { useState } from 'react'

const Signin = () => {
  const [SignUp, setSignUp] = useState(false);

  return (

    <div className='body'>
      <div className='card'>
        <div className='top'>
          <div className='login'>Please Login To Continue</div>
          <div className='auth-container'>
            <div className='sign-container'>
              <div className='signin' onClick={setSignUp(false)}>Sign In</div>
              <div className='signin' onClick={setSignUp(true)}>Sign Up</div>
            </div>
            <div className='input-area'>
              {!SignUp ?
            <div>
            <input className='field' type='text' placeholder='Email'></input>
              <input className='field' type='password' placeholder='Password'></input>
              <button className='in-button'>Sign In</button>
              <button className='in-button'>Sign In With Google</button>
              </div>

            :
            <div>
            <input className='field' type='text' placeholder='Name'></input>
            <input className='field' type='text' placeholder='Email'></input>
            <input className='field' type='password' placeholder='Password'></input>
            <button className='in-button'>Sign In</button>
            <button className='in-button'>Sign In With Google</button>
          </div>
    }
        </div>
      </div>
    </div>
      </div >
      </div >
    
    
  )
}

export default Signin;
