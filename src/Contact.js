import React from 'react'
import Navbar from './components/Header/Navbar'
import { Box } from '@mui/material'
import FormContact from './components/Inputs/FormContact'

function Contact() {
  return (
    <Box>
      <Navbar />
      <FormContact />
    </Box>
  )
}

export default Contact