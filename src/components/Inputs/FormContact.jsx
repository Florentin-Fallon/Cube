import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function FormContact() {
  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'url(https://cdn.discordapp.com/attachments/1020308925033230546/1306247013230313512/2024-10-23_14.34.32.png?ex=6735f8d4&is=6734a754&hm=06e9159a08bd1a2c0ac4ed03949fc35cc55f02dd79ab1e586331a1a307c3594d&)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Box>
        <Typography sx={{ marginBottom: 2, fontWeight: 700 }} variant="h3">
          Besoin d'aide ?
        </Typography>
        <Typography sx={{ fontWeight: 'light' }} variant="h6"> 
            Remplissez le formulaire et on vous répondras au plus vite
        </Typography>
      </Box>
      <Box sx={{ marginTop: 4, display: 'flex', gap: 1 }}>
        <TextField label="Titre" variant="outlined" />
        <TextField label="Entrez votre message..." variant="outlined" rows={5} id="outlined-multiline-static" multiline />
        <Button>Envoyer</Button>
      </Box>
    </Box>
  );
}

export default FormContact;
