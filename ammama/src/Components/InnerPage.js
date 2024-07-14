import React from 'react'
import reactlogo from '../assets/ammama.jpg'
import { Link } from 'react-router-dom'
import Me from './Me'
import  { useState } from 'react';

export default function InnerPage() {

    const [show, setShow] = React.useState(true);

    
  return (
  <div><div>
   <Link to="/about
    ">  <button>back</button></Link>
    </div>
    <div>
   <Link to="/me
    ">  <button>me</button></Link>
    </div>
   
    
   


    <div>  <img src={reactlogo} /></div>

    <Link to="/thank"><button>Next</button></Link>
  

    </div>

  )
}
