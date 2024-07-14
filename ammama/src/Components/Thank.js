import React from 'react'
import { Link } from 'react-router-dom'
import reactlogo from '../assets/ammama.jpg'

export default function Thank() {
  return (
    <div>
      <Link to="/inner"><button>back</button></Link>
      <h1>THANK YOU</h1>
      <img src={reactlogo} />
    </div>
  )
}
