import './Style.css'
import React, { useState } from 'react'
import {signup,signin, googlesignin,googlesignup} from '../../api/index'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

const Signin = () => {
  const [SignUp, setSignUp] = useState(false);

  const [user, setUser] = useState({name:'',email:'',password:''});

  const login = useGoogleLogin({
    onSuccess: async response => {
      try{
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
          headers:{
            "Authorization": `Bearer ${response.access_token}`
          }
        })
        console.log(res)
        const name = res.data.name;
        const email = res.data.email;
        const googleUser = {name:name,email:email};
        console.log(googleUser);
        if(SignUp){
        await googlesignup(googleUser).then((res)=>{
          console.log(res);
        }).catch((error)=>{
          console.log(error);
        })
      }
      else{
        await googlesignin(googleUser).then((res)=>{
          console.log(res);
        }).catch((error)=>{
          console.log(error);
        })
      }
    }catch(err){
      console.log(err)
    }
  }
  });

  const handleSignUp = async(e) => {
    if(user.name === '' || user.email === '' || user.password === '')
      alert('Please fill up all the required fields!');
    console.log(user);
    await signup(user).then((res)=>{
      console.log(res.data);
      console.log(res);
    }).catch((error)=>{
      console.log(error);
    })
  }

  const handlSignIn = async (e) => {
    await signin(user).then((res)=>{
      console.log(res);
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (

    <div className='body'>
      <div className='card'>
        <div className='top'>
          <div className='login'>Please Login To Continue</div>
          <div className='auth-container'>
            <div className='sign-container'>
              <div className={(SignUp ? 'signinG' : 'signin')} onClick={()=>setSignUp(false)} style={{"border-right": "1px solid pink"}}>Sign In</div>
              <div className={(SignUp? 'signin' : 'signinG')} onClick={()=>setSignUp(true)}>Sign Up</div>
            </div>
            <div>
              {!SignUp ?
            <div className='input-area'>
            <input className='field' type='text' placeholder='Email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
              <input className='field' type='password' placeholder='Password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
              <button className='in-button' onClick={handlSignIn} >Sign In</button>
              <button className='in-button' onClick={login}>Sign In With Google</button>
              </div>

            :


            <div className='input-area'>
            <input className='field' type='text' placeholder='Name' value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
            <input className='field' type='text' placeholder='Email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <input className='field' type='password' placeholder='Password' onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <button className='in-button' onClick={handleSignUp}>Register</button>
            <button className='in-button' onClick={login}>Sign In With Google</button>
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
