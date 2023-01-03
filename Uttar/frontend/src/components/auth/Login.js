import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, provider } from '../firebase'
import './Login.css'

const Login = () => {

    const handleSubmit = async () => {
        await signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className='login-page'>
    <div className='login-container'>
      <img src="./Images/logo/logo.png" alt="logo"></img>
      <div className='main-body'>
        <h1>Welcome to Uttar</h1>
          <button onClick = {handleSubmit} className='btn-login'>Login Using Google Account</button>
          </div>
      </div>
      </div>
  )
}

export default Login
