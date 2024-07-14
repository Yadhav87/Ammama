import React from 'react'
import reactlogo from '../assets/ammama.jpg'
import { Link } from 'react-router-dom'


function About() {
  return (
    <div>
      <Link to="/
    "><button>back</button></Link>
      <h1>A LITTLE ABOUT ME</h1>
      <p> I am a digital nomad currently
based in Hong Kong. I've been
working in graphic design for the
past ten years. It was only in the
past three that I decided to focus
full-time on illustrating.</p>
      <img src={reactlogo} />
      <h1>The Hierarchy</h1>
      <Link to="/inner"><button>Next page</button></Link>
    </div>
  )
}

export default About
