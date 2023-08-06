import {combineReducers} from '@reduxjs/toolkit';
import {notesSlice} from '../../modules/notes';

export const rootReducer = combineReducers({
  notes: notesSlice.reducer,
});
