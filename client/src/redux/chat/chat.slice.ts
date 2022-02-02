import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { io } from 'socket.io-client';

export const socket = io();

export interface Message {
  text: string;
  createdAt: number;
}

export interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action: PayloadAction<string>) => {
      socket.emit('message-client', action.payload);
    },

    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },

    joinRoom: (
      state,
      action: PayloadAction<{ name: string; room: string }>
    ) => {
      socket.emit('join', action.payload);
    },
  },
});

export const { addMessage, sendMessage, joinRoom } = chatSlice.actions;
