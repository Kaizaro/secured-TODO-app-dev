import {ITODO} from '../entities';
import {TODOSlice, TODOSliceActions, TODOSliceInitialState} from '../DAL';
import uuid from 'react-native-uuid';
import dayjs from 'dayjs';

const testTODO = {
  uuid: uuid.v4().toString(),
  text: 'test-text',
  updatedAt: dayjs().valueOf().toString(),
  timestamp: dayjs().valueOf(),
} as ITODO;

/**
 * Test for check work of TODO slice
 */
describe('Test TODO reducer', () => {
  /**
   * Getting of initial state of TODOForm slice
   */
  it('get the initial state', () => {
    expect(TODOSlice.reducer(undefined, {})).toEqual(TODOSliceInitialState);
  });

  /**
   * Check working when put new item in TODOStore
   */
  it('handles add item to TODO list', () => {
    expect(TODOSlice.reducer(TODOSliceInitialState, TODOSliceActions.setNotesList([testTODO]))).toEqual({
      ...TODOSliceInitialState,
      TODOList: [testTODO],
    });
  });

  /**
   * Check selecting of item in TODOStore
   */
  it('handles set item as selected from TODO list', () => {
    expect(TODOSlice.reducer(TODOSliceInitialState, TODOSliceActions.setSelectedNote(testTODO))).toEqual({
      ...TODOSliceInitialState,
      selectedTODO: testTODO,
    });
  });

  /**
   * Check unselecting item in TODOStore
   */
  it('handles removing selected item from TODO list', () => {
    expect(TODOSlice.reducer(TODOSliceInitialState, TODOSliceActions.clearSelectedNote())).toEqual({
      ...TODOSliceInitialState,
      selectedTODO: null,
    });
  });

  /**
   * Check removing of item from TODOStore
   */
  it('handles clear TODO list', () => {
    expect(TODOSlice.reducer(TODOSliceInitialState, TODOSliceActions.clearNotesList())).toEqual({
      ...TODOSliceInitialState,
      TODOList: [],
    });
  });

  /**
   * Check clear store function
   */
  it('handles clear all reducer', () => {
    expect(TODOSlice.reducer(TODOSliceInitialState, TODOSliceActions.clearAll())).toEqual(TODOSliceInitialState);
  });
});
