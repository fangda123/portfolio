import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import hackerTheme from '../theme';
import MatrixBackground from '../components/Effects/MatrixBackground';
import HackerHeader from '../components/HackerHeader';

const HackerLayout = ({ children }) => {
  return (
    <ThemeProvider theme={hackerTheme}>
      <Box sx={{ 
        minHeight: '100vh',
        backgroundColor: 'black',
        position: 'relative',
        pt: '64px'
      }}>
        <MatrixBackground />
        <HackerHeader />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default HackerLayout; 