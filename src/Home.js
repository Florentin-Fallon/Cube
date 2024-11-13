import React from 'react'
import Navbar from './components/Header/Navbar'
import { Box } from '@mui/material'
import LandingPage from './components/Header/LandingPage'

function Home() {
  return (
    <Box>
      <Navbar />
      <LandingPage />
    </Box>
  )
}

export default Home