import React from 'react'
import reactlogo from '../assets/ammama.jpg'
import { Link } from 'react-router-dom'


export default function InnerPage() {
  return (
    <div><button>ME</button>
    <button>ME</button>
    <button>ME</button>
    <Link to="/"><button>Next page</button></Link>


    </div>
  )
}
