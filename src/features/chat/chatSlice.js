import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { callChatBotAPI } from './ChatBotAPI';

// อ่านจาก Local Storage
const savedChat = localStorage.getItem('hacker_chat_history');
const initialState = {
  messages: savedChat ? JSON.parse(savedChat) : [],
  status: 'idle',
  error: null
};

// AsyncThunk เรียก API
export const sendMessageToBot = createAsyncThunk(
  'chat/sendMessageToBot',
  async (userMessage, { getState }) => {
    const state = getState();
    const messages = state.chat.messages;
    // รวม message เก่า + ใหม่
    const newMessages = [...messages, { role: 'user', content: userMessage }];

    // เรียกใช้งาน API
    const botReply = await callChatBotAPI(newMessages);
    return botReply;
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addUserMessage: (state, action) => {
      state.messages.push({ role: 'user', content: action.payload });
      // บันทึกลง Local Storage
      localStorage.setItem('hacker_chat_history', JSON.stringify(state.messages));
    },
    addBotMessage: (state, action) => {
      state.messages.push({ role: 'assistant', content: action.payload });
      // บันทึกลง Local Storage
      localStorage.setItem('hacker_chat_history', JSON.stringify(state.messages));
    },
    loadChatFromLocalStorage: (state) => {
      const saved = localStorage.getItem('hacker_chat_history');
      if (saved) {
        state.messages = JSON.parse(saved);
      }
    },
    clearChat: (state) => {
      state.messages = [];
      localStorage.removeItem('hacker_chat_history');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessageToBot.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendMessageToBot.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages.push({ role: 'assistant', content: action.payload });
        // บันทึกลง Local Storage
        localStorage.setItem('hacker_chat_history', JSON.stringify(state.messages));
      })
      .addCase(sendMessageToBot.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addUserMessage, addBotMessage, loadChatFromLocalStorage, clearChat } = chatSlice.actions;
export default chatSlice.reducer; 