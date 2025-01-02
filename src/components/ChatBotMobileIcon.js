import React, { useState } from 'react';
import { IconButton, Drawer, Box } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import ChatBotWindow from './ChatBotWindow';

const ChatBotMobileIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = () => {
    localStorage.removeItem('hacker_chat_history');
    window.location.reload();
  };

  return (
    <>
      {!isOpen && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid',
            borderColor: 'primary.main',
            color: 'primary.main',
            zIndex: 1000,
            '&:hover': {
              backgroundColor: 'rgba(0, 255, 0, 0.1)'
            }
          }}
        >
          <ChatIcon />
        </IconButton>
      )}
      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(5px)'
          }
        }}
        sx={{
          '& .MuiDrawer-paper': {
            height: '100%'
          }
        }}
      >
        <Box sx={{ 
          height: '100%',
          p: { xs: 1, sm: 2 }
        }}>
          <ChatBotWindow 
            onClose={toggleDrawer}
            onClear={clearChat}
            isChatOpen={isOpen}
            isMobile={true}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default ChatBotMobileIcon; 