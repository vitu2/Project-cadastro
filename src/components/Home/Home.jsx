import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
        <h2>Faça seu cadastro</h2>
        <Link to='/cadastro' className='link-home-style'>clique aqui</Link>
    </div>
  )
}
