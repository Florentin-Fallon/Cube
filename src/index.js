import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { createTheme, ThemeProvider } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#dc004e',
    },
    success: {
      main: '#6fbf73',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
      contrastText: '#fff'
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);