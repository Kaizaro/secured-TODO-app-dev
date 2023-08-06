import {combineReducers} from '@reduxjs/toolkit';
import {TODOSlice} from '../../modules/TODO';
import {TODOFormSlice} from '../../modules/TODO/DAL/TODOFormSlice';

export const rootReducer = combineReducers({
  TODO: TODOSlice.reducer,
  TODOForm: TODOFormSlice.reducer,
});
