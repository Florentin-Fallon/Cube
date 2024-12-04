import React,{useState} from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function FormContact() {
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nom:', lastname);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Formulaire envoyé');
  }

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
          Besoin d'aide ?
        </Typography>
        <Typography sx={{ fontWeight: 'light' }} variant="h6"> 
            Remplissez le formulaire et on vous répondras au plus vite
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
      <Box sx={{ marginTop: 4, display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white' }}>
        <TextField type='text' sx={{width: 400, input: { color: 'white' }, '& .MuiInputLabel-root': {color: 'white'}}} color='success' label="Prénom" variant="outlined" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        <TextField type='email' sx={{width: 400, input: { color: 'white' }, '& .MuiInputLabel-root': {color: 'white'}}} color='success' label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextField type='text' sx={{width: 400, textarea: { color: 'white' }, '& .MuiInputLabel-root': {color: 'white'}}} color='success' label="Entrez votre message..." variant="outlined" rows={5} multiline value={message} onChange={(e) => setMessage(e.target.value)}/>
        <Button variant='contained' sx={{bgcolor: 'white', color: 'black', mt: 3, width:400}} type='submit'>Envoyer</Button>
      </Box>
      </form>
    </Box>
  );
}

export default FormContact;
