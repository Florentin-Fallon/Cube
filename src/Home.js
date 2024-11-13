import React from 'react'
import Navbar from './components/Header/Navbar'
import { Box, Typography } from '@mui/material'

function Home() {
  return (
    <Box>
      <Navbar />
      <Typography variant='h6'>Bienvenue sur la page d'accueil</Typography>
    </Box>
  )
}

export default Home