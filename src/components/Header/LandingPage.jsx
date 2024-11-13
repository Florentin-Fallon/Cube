import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function LandingPage() {
  const serverIP = 'play.le-cube.fr';

  const handleCopyIP = () => {
    navigator.clipboard.writeText(serverIP);
    alert("Adresse IP copiée !");
  };

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
          Un serveur mini-jeux pour <br /> passer un bon moment
        </Typography>
        <Typography sx={{ fontWeight: 'light' }} variant="h6">
          Venez nous rejoindre dès maintenant !
        </Typography>
      </Box>
      <Box sx={{ marginTop: 4, display: 'flex', gap: 1 }}>
        <TextField
          value={serverIP}
          variant="outlined"
          InputProps={{
            readOnly: true,
            style: { color: 'white' }
          }}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 1,
            input: { textAlign: 'center' },
            width: '250px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
            },
            '& .MuiOutlinedInput-root:hover fieldset': { borderColor: 'lightgray' },
            '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: 'white' },
          }}
        />
        <Button
          variant="contained"
          onClick={handleCopyIP}
          sx={{
            color: 'black',
            backgroundColor: '#fff',
            '&:hover': { backgroundColor: '#303f9f' },
          }}
        >
          Copier l'IP
        </Button>
      </Box>
    </Box>
  );
}

export default LandingPage;
