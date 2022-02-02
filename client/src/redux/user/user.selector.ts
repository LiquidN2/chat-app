import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectUser = (state: RootState) => state.user;

export const selectName = createSelector([selectUser], user => user.name);

export const selectRoom = createSelector([selectUser], user => user.room);
