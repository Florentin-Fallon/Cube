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
        backgroundImage: 'url(https://cdn.discordapp.com/attachments/1020308925033230546/1306247013230313512/2024-10-23_14.34.32.png?ex=6750ff94&is=674fae14&hm=2b3959af0d86c40d9f3739f65c41a0900030bcbfcb0f1e8113e3c7db0c759dc8&)',
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
