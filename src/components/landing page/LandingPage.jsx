import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router'

function LandingPage() {
  return (
    <div className='container_div'>
    <h1>Welcome to <span>PopX</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <Link to ='/login'>
    <button className='login'>Create Account</button>
    </Link>
    <Link to ='/signin'>
    <button className='signin'>Already Registered? Login</button>
    </Link>
    </div>
  )
}

export default LandingPage