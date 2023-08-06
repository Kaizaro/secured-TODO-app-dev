import {combineReducers} from '@reduxjs/toolkit';
import {TODOSlice} from '../../modules/TODO';

export const rootReducer = combineReducers({
  TODO: TODOSlice.reducer,
});
