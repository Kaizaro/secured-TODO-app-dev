import {combineReducers} from '@reduxjs/toolkit';
import {TODOSlice} from '../../modules/notes';

export const rootReducer = combineReducers({
  TODO: TODOSlice.reducer,
});
