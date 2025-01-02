import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Button, Typography, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import { addUserMessage, sendMessageToBot } from '../features/chat/chatSlice';
import { useTranslation } from 'react-i18next';

const ChatBotWindow = ({ onClose, onClear, isChatOpen, isMobile }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const messages = useSelector((state) => state.chat.messages);
  const status = useSelector((state) => state.chat.status);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;
    
    dispatch(addUserMessage(input));
    dispatch(sendMessageToBot(input));
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    localStorage.removeItem('hacker_chat_history');
    dispatch({ type: 'chat/clearChat' });
  };

  const buttonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid',
    borderColor: 'primary.main',
    color: 'primary.main',
    padding: '4px',
    '&:hover': {
      backgroundColor: 'rgba(0, 255, 0, 0.1)'
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: isMobile ? '100%' : '500px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        border: '1px solid',
        borderColor: 'primary.main',
        backdropFilter: 'blur(5px)'
      }}
    >
      <Box sx={{ 
        p: isMobile ? 1 : 2, 
        borderBottom: '1px solid',
        borderColor: 'primary.main',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: '"Courier New", monospace',
            color: 'primary.main',
            fontSize: isMobile ? '1.1rem' : '1.25rem'
          }}
        >
          Jakkrich Suwannarak
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            onClick={handleClear}
            size="small"
            sx={buttonStyle}
          >
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={onClose}
            size="small"
            sx={buttonStyle}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Messages */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          p: isMobile ? 1 : 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
      >
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            sx={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%'
            }}
          >
            <Paper
              elevation={1}
              sx={{
                p: isMobile ? 0.75 : 1,
                backgroundColor: msg.role === 'user' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(0, 0, 0, 0.6)',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'primary.main'
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'primary.main',
                  fontFamily: '"Courier New", monospace',
                  whiteSpace: 'pre-wrap',
                  fontSize: isMobile ? '0.875rem' : '1rem'
                }}
              >
                {msg.content}
              </Typography>
            </Paper>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Box>

      {/* Input */}
      <Box
        sx={{
          p: isMobile ? 1 : 2,
          borderTop: '1px solid',
          borderColor: 'primary.main',
          display: 'flex',
          gap: 1
        }}
      >
        <TextField
          fullWidth
          size={isMobile ? "small" : "medium"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={status === 'loading' ? t('thinking') : t('typeMessage')}
          disabled={status === 'loading'}
          multiline
          maxRows={4}
          sx={{
            '& .MuiOutlinedInput-root': {
              color: 'primary.main',
              '& fieldset': {
                borderColor: 'primary.main'
              },
              '&:hover fieldset': {
                borderColor: 'primary.main'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main'
              }
            }
          }}
        />
        <Button
          variant="contained"
          onClick={handleSend}
          disabled={status === 'loading' || !input.trim()}
          sx={{
            minWidth: 'unset',
            backgroundColor: 'primary.main',
            color: 'background.paper',
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Paper>
  );
};

export default ChatBotWindow; 