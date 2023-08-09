import {TODOSliceActions} from '../DAL';
import {TODOFormSlice, TODOFormSliceActions, TODOFormSliceInitialState} from '../DAL/TODOFormSlice';

const testTODOText = 'test-text';

describe('Test TODOFormSlice', () => {
  it('get the initial reducer state', () => {
    expect(TODOFormSlice.reducer(undefined, {})).toEqual(TODOFormSliceInitialState);
  });

  it('handle changing text when input', () => {
    expect(
      TODOFormSlice.reducer(TODOFormSliceInitialState, TODOFormSliceActions.setTODOInputValue(testTODOText)),
    ).toEqual({
      ...TODOFormSliceInitialState,
      TODOInputValue: testTODOText,
    });
  });

  it('handle clear text input field', () => {
    expect(TODOFormSlice.reducer(TODOFormSliceInitialState, TODOFormSliceActions.clearTODOInputValue())).toEqual({
      ...TODOFormSliceInitialState,
      TODOInputValue: '',
    });
  });

  it('handles clear all reducer', () => {
    expect(TODOFormSlice.reducer(TODOFormSliceInitialState, TODOSliceActions.clearAll())).toEqual(
      TODOFormSliceInitialState,
    );
  });
});
