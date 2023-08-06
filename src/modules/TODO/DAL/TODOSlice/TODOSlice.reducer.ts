import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {TODOSliceInitialState} from './TODOSlice.initialState';
import {ITODO} from '../../entities';

export const TODOSlice = createSlice({
  name: 'TODOSlice',
  initialState: TODOSliceInitialState,
  reducers: {
    setNotesList: (state, action: PayloadAction<ITODO[]>) => {
      state.TODOList = action.payload;
    },
    clearNotesList: (state) => {
      state.TODOList = [];
    },
    setSelectedNote: (state, action: PayloadAction<ITODO>) => {
      state.selectedTODO = action.payload;
    },
    clearSelectedNote: (state) => {
      state.selectedTODO = null;
    },
    clearAll: () => TODOSliceInitialState,
  },
});

export const TODOSliceActions = TODOSlice.actions;
