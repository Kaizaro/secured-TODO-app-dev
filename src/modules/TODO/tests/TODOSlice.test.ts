import {ITODO} from '../entities';
import {TODOSlice, TODOSliceActions, TODOSliceInitialState} from '../DAL';
import uuid from 'react-native-uuid';
import dayjs from 'dayjs';

const testTODO = {
  id: uuid.v4().toString(),
  text: 'test-text',
  updatedAt: dayjs().valueOf().toString(),
  timestamp: dayjs().valueOf(),
  isSelected: false,
} as ITODO;

describe('Test TODO reducer', () => {
  it('get the initial state', () => {
    expect(TODOSlice.reducer(undefined, {})).toEqual(TODOSliceInitialState);
  });

  it('handles add item to TODO list', () => {
    expect(TODOSlice.reducer(TODOSliceInitialState, TODOSliceActions.setNotesList([testTODO]))).toEqual({
      ...TODOSliceInitialState,
      TODOList: [testTODO],
    });
  });

  it('handles set item as selected from TODO list', () => {
    expect(TODOSlice.reducer(TODOSliceInitialState, TODOSliceActions.setSelectedNote(testTODO))).toEqual({
      ...TODOSliceInitialState,
      selectedTODO: testTODO,
    });
  });

  it('handles removing selected item from TODO list', () => {
    expect(TODOSlice.reducer(TODOSliceInitialState, TODOSliceActions.clearSelectedNote())).toEqual({
      ...TODOSliceInitialState,
      selectedTODO: null,
    });
  });

  it('handles clear TODO list', () => {
    expect(TODOSlice.reducer(TODOSliceInitialState, TODOSliceActions.clearNotesList())).toEqual({
      ...TODOSliceInitialState,
      TODOList: [],
    });
  });

  it('handles clear all reducer', () => {
    expect(TODOSlice.reducer(TODOSliceInitialState, TODOSliceActions.clearAll())).toEqual(TODOSliceInitialState);
  });
});
