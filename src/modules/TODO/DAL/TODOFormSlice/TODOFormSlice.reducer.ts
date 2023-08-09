import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {TODOFormSliceInitialState} from './TODOFormSlice.initialState';

/**
 * TODOForm slice (actions and reducer)
 */
export const TODOFormSlice = createSlice({
  name: 'TODOFormSlice',
  initialState: TODOFormSliceInitialState,
  reducers: {
    setTODOInputValue: (state, action: PayloadAction<string>) => {
      state.TODOInputValue = action.payload;
    },
    clearTODOInputValue: (state) => {
      state.TODOInputValue = '';
    },
    clearAll: () => TODOFormSliceInitialState,
  },
});

export const TODOFormSliceActions = TODOFormSlice.actions;
