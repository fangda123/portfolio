import { createTheme } from '@mui/material/styles';

const hackerTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00', // Hacker green
    },
    secondary: {
      main: '#ff00ff'
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a'
    },
    text: {
      primary: '#00ff00',
      secondary: '#ffffff'
    }
  },
  typography: {
    fontFamily: ['"Fira Code", monospace', 'Roboto'].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem'
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem'
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem'
    },
    body1: {
      fontSize: '1rem'
    }
  }
});

export default hackerTheme; 