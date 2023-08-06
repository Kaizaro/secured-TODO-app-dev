import {combineReducers} from '@reduxjs/toolkit';
import {TODOSlice} from '../../modules/notes';

export const rootReducer = combineReducers({
  notes: TODOSlice.reducer,
});
