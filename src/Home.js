import React from 'react'
import Navbar from './components/Header/NavbarComponent'

function Home() {
  return (
    <div>
        <Navbar />
        <div>
          <h1 className='title'>Bienvenue sur la page d'accueil</h1>
        </div>
    </div>
  )
}

export default Home