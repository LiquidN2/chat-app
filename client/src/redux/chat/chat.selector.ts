import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectChat = (state: RootState) => state.chat;

export const selectMessages = createSelector(
  [selectChat],
  chat => chat.messages
);
