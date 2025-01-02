import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery, IconButton, Collapse, Box } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import HackerHeader from './components/HackerHeader';
import Home from './pages/Home';
import ChartPage from './pages/ChartPage';
import Experience from './pages/Experience';
import ChatBotWindow from './components/ChatBotWindow';
import ChatBotMobileIcon from './components/ChatBotMobileIcon';
import hackerTheme from './theme';
import './i18n';
import './styles/hackerStyle.css';

const MatrixBackground = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let letters = Array(256).join('1').split('');
    const fontSize = 16;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';
      
      letters.forEach((y_pos, index) => {
        const charSets = [
          String.fromCharCode(0x0E00 + Math.random() * 96), // ไทย
          String.fromCharCode(0x30A0 + Math.random() * 96), // ญี่ปุ่น
          String.fromCharCode(0x4E00 + Math.random() * 8000), // จีน
          String.fromCharCode(33 + Math.random() * 94) // อังกฤษ
        ];
        
        const text = charSets[Math.floor(Math.random() * charSets.length)];
        const x_pos = index * fontSize;
        
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#0F0';
        ctx.fillText(text, x_pos, y_pos);
        ctx.shadowBlur = 0;

        if (y_pos > h && Math.random() > 0.975) {
          letters[index] = 0;
        } else {
          letters[index] = y_pos + fontSize;
        }
      });
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      letters = Array(Math.ceil(w / fontSize)).join('1').split('');
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
  );
};

function App() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [isChatOpen, setIsChatOpen] = useState(true);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const clearChat = () => {
    localStorage.removeItem('hacker_chat_history');
    window.location.reload();
  };

  const buttonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid',
    borderColor: 'primary.main',
    color: 'primary.main',
    '&:hover': {
      backgroundColor: 'rgba(0, 255, 0, 0.1)'
    }
  };

  return (
    <ThemeProvider theme={hackerTheme}>
      <Router>
        <div style={{ minHeight: '100vh', position: 'relative' }}>
          <MatrixBackground />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <HackerHeader />
            
            {isSmallScreen ? (
              <ChatBotMobileIcon />
            ) : (
              <div style={{ 
                position: 'fixed', 
                bottom: 20, 
                right: 20, 
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end'
              }}>
                {!isChatOpen && (
                  <IconButton
                    onClick={toggleChat}
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid',
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 255, 0, 0.1)'
                      }
                    }}
                  >
                    <ChatIcon />
                  </IconButton>
                )}
                <Collapse in={isChatOpen} timeout="auto">
                  <div style={{ width: 350 }}>
                    <ChatBotWindow 
                      onClose={toggleChat}
                      onClear={clearChat}
                      isChatOpen={isChatOpen}
                    />
                  </div>
                </Collapse>
              </div>
            )}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chart" element={<ChartPage />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
