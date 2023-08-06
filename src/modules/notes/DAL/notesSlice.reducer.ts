import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {notesSliceInitialState} from './notesSlice.initialState';
import {INote} from '../entities';

export const notesSlice = createSlice({
  name: 'notesSlice',
  initialState: notesSliceInitialState,
  reducers: {
    setNotesList: (state, action: PayloadAction<INote[]>) => {
      state.notesList = action.payload;
    },
    clearNotesList: (state) => {
      state.notesList = [];
    },
    setSelectedNote: (state, action: PayloadAction<INote>) => {
      state.selectedNote = action.payload;
    },
    clearSelectedNote: (state) => {
      state.selectedNote = null;
    },
    clearAll: () => notesSliceInitialState,
  },
});

export const notesSliceActions = notesSlice.actions;
