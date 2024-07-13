import React from 'react'
import reactlogo from '../assets/ammama.jpg'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <h1>parvathy</h1>
      <img src={reactlogo} />
      <h1>PORTFOLIO</h1>
      <Link to="/about"><button>Next page</button></Link>


    </div>
  )
}

export default Login
