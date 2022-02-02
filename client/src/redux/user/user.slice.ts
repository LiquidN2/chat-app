import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  room: string;
}

const initialState: UserState = {
  name: '',
  room: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setRoom: (state, action: PayloadAction<string>) => {
      state.room = action.payload;
    },
  },
});

export const { setName, setRoom } = userSlice.actions;
